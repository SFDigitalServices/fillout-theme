/**
 * This is an auto plugin that adds an unpkg link to the published stylesheet
 * for use in the Chrome extension.
 *
 * https://intuit.github.io/auto/docs/configuration/autorc#custom-plugins
 */

// get the stylesheet path from "main" in package.json
const stylesheetPath = require('../package.json').main

// use the same string for the plugin name, tap label, and comment marker id
const name = 'canary-url'
/** @type {import('@auto-it/core').IPlugin} */
module.exports = {
  name,
  apply(auto) {
    auto.hooks.afterShipIt.tapPromise(name, async ({ newVersion, context, dryRun }) => {
      if (context !== 'canary' || dryRun) return
      const url = `https://unpkg.com/@sfgov/fillout@${newVersion}/${stylesheetPath}`
      await auto.prBody({
        context: name,
        message: [
          'CSS URL:',
          '```',
          url,
          '```'
        ].join('\n')
      })
    })
  }
}
