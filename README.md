# SF.gov Fillout theme

This repo contains code and documentation for managing our [Fillout theme].

## Build

The stylesheets in the [theme directory](./theme/) is built for production with
[postcss] and [Tailwind][] (the same tools used to build SF.gov's stylesheets
and React components). This helps us write less CSS (e.g. with nested selectors)
and more precisely override Fillout's own CSS, which is also built with
Tailwind. To build the stylesheet, run:

```sh
npm run build
```

This creates `dist/theme-sfgov.css`. Set `NODE_ENV=production` to enable
minification. (This is done automatically in the `prepublishOnly` script,
which is run by `npm publish`.)

## Test

You can test the stylesheet with our [Chrome extension]. Follow the instructions
in that repo to install it, then right-click on the extension icon in Chrome and
select <kbd>Options</kbd>.

### URL

If you're reading this on GitHub or npm, or you don't need to modify the source
files and just want to see Fillout forms with this _version_ of the CSS, select
"URL" and paste this URL into the text field:

```url
https://unpkg.com/@sfgov/fillout@latest/dist/theme-sfgov.css
```

Note that you can specify any version of the package by replacing `latest` with
it. For instance, to see version `0.0.6` of the CSS, you would paste:

```url
https://unpkg.com/@sfgov/fillout@0.0.6/dist/theme-sfgov.css
```

Then, navigate to any Fillout form and toggle the "CSS" button in the top right
of the tab or frame so that it turns green and says "CSS: custom". From this
point on, every Fillout form will have its custom CSS replaced by the stylesheet
at that URL.

If you change the URL in the extension options, the styles will update
automatically. Click the "CSS: custom" toggle at any time to switch back to the
CSS of the form's selected theme.

### Local CSS

If you're working on the stylesheets in this repo, select "Local CSS" and paste
the full path to `dist/theme-sfgov.css` in the text field, which you can get
with:

```sh
realpath dist/theme-sfgov.css
```

Then, navigate to any Fillout form and toggle the "CSS" button in the top right
of the tab or frame so that it turns green and says "CSS: custom". From that
point on, the form styles should update automatically whenever you rebuild the
CSS. This pairs nicely with watch mode, which will rebuild whenever source or
config files change:

```sh
npm run watch
```

Click the "CSS: custom" toggle at any time to switch back to the CSS of the
form's selected theme.

## Deploy

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
[fillout theme]: https://www.fillout.com/help/themes
[chrome extension]: https://github.com/SFDigitalServices/fillout-css-extension
