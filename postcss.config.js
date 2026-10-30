// eslint-disable-next-line @typescript-eslint/unbound-method
const { join } = require('path')
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const header = require('postcss-header')
const nest = require('postcss-nested')
const tailwind = require('tailwindcss')
const { name, version } = require('./package.json')

/**
 * It's crucial to preserve the trailing semicolons in our minified CSS because
 * Fillout strips the `!important` keyword from rules that don't end explicitly
 * with a semicolon. (This is a bug on Fillout's side, but they probably never
 * expected people to dump minified CSS into their tools!)
 */
/** @type {import('postcss').Plugin} */
const retainFinalSemicolons = {
  postcssPlugin: 'retain-final-semicolons',
  OnceExit(root) {
    root.walkDecls((declaration) => {
      declaration.parent.raws.semicolon = true
    })
  },
}

/** @type {import('postcss-load-config').ConfigPlugin[]} */
const plugins = [
  // postcss-import only resolves @import at the top of a file, so run it first
  atImport({
    path: [
      join(__dirname, 'src')
    ]
  }),
  header({
    header: [
      `/*! ${name}@${version}`,
      `    THIS FILE IS GENERATED; DO NOT EDIT IT! */`,
    ].join('\n')
  }),
  nest,
  tailwind,
  autoprefixer
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    cssnano({
      preset: 'default',
    }),
    retainFinalSemicolons,
  )
}

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins,
}
