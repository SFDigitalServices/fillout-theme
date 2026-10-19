# Fillout support for SF.gov

This directory contains two parts that work together:

1. CSS for our [Fillout theme]
2. [Chrome extension](./extension/) for previewing and testing our custom CSS

## Theme CSS

The CSS in the [theme directory](./theme/) is built for production with
[postcss] and [Tailwind][] (the same tools used to build SF.gov's stylesheets
and React components). This helps us write less CSS (e.g. with nested selectors)
and more precisely override Fillout's own CSS, which is also built with
Tailwind.

### Build

To build the CSS for production, run:

```sh
npm run build:css
```

This creates `dist/theme-sfgov.css`. Set `NODE_ENV=production` to enable
minification. (This is done automatically when the build is triggered via `npm
publish`.)

### Deploy

We "deploy" the CSS by manually copying and pasting it into the custom CSS field
in Fillout's [advanced designer].

1. Navigate to the edit view of a Fillout form that uses the default SF.gov
   theme, such as the [kitchen sink form][kitchen sink form editor]
1. Click the <kbd>🖌️ Theme</kbd> button in the top left of the editor view
1. Click the <kbd>Advanced designer</kbd> button at the bottom of the left hand
   panel
1. Under "Custom CSS", click the <kbd>Edit CSS</kbd> button
1. Copy the contents of `dist/theme-sfgov.css`:

    ```sh
    # in macOS terminal
    cat dist/theme-sfgov.css | pbcopy
    ```

1. Paste the CSS into the modal CSS editor

### Development with the extension

1. Run `npm run watch:css` to watch the source files and automatically rebuild
   `dist/theme-sfgov.css` whenever they change.
2. In the [Chrome extension](./extension/) options, select the "Local CSS" option
3. Enter the full path to `dist/theme-sfgov.css`, which you can get with:

    ```sh
    # in macOS terminal
    realpath dist/theme-sfgov.css | pbcopy
    ```

With the watch script running and the extension enabled, you should get nearly
instantaneous updates to the styles on Fillout form pages.

If you aren't seeing updates, be sure to check the terminal where you started
the watch script: It may list build errors that you'll need to fix. If you've
made a change to the `watch:css` script or updated CSS build dependencies, you
may need to kill the script with <kbd>Control+C</kbd> and start it again.

[fillout theme]: https://sfgovdt.jira.com/wiki/spaces/DS/pages/5297504257/Fillout+themes+and+custom+CSS
[postcss]: https://postcss.org/
[tailwind]: https://v3.tailwindcss.com/
[advanced designer]: https://www.fillout.com/help/advanced-designer
[kitchen sink form editor]: https://build.fillout.com/editor/v4exrkajutus
