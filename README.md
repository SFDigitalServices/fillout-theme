# Fillout support for SF.gov

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

[postcss]: https://postcss.org/
[tailwind]: https://v3.tailwindcss.com/
[advanced designer]: https://www.fillout.com/help/advanced-designer
[kitchen sink form editor]: https://build.fillout.com/editor/v4exrkajutus
