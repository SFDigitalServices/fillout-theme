/**
 * This is an auto plugin that adds an unpkg link to the published stylesheet
 * for use in the Chrome extension.
 *
 * https://intuit.github.io/auto/docs/configuration/autorc#custom-plugins
 */

module.exports = class CanaryURLPlugin {
  // use the same string for the plugin name, tap label, and comment marker id
  name = 'canary-url'

  /** @type {import('@auto-it/core').IPlugin['apply']} */
  apply(auto) {
    // get the stylesheet path from "main" in package.json
    const stylesheetPath = require('../package.json').main

    auto.hooks.afterShipIt.tapPromise(this.name, async ({ newVersion, context, dryRun }) => {
      if (context !== 'canary' || dryRun) return
      const url = `https://unpkg.com/@sfgov/fillout@${newVersion}/${stylesheetPath}`
      await auto.prBody({
        context: this.name,
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
