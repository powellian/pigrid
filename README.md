# PiGrid
![GitHub release (latest by date)](https://img.shields.io/github/v/release/powellian/pigrid)  ![GitHub](https://img.shields.io/github/license/powellian/pigrid)  ![David](https://img.shields.io/david/powellian/pigrid)


**What**  
CSS-Grid/Flexbox grid system - **[Demo](https://powellian.com/pigrid/demos/)**.  
A SCSS setup utilising a few loops and a bunch of settings to generate up to 12 grid-row elements, all nestable, using inline classes.  Utilises [BEM](https://css-tricks.com/bem-101/) throughout.
A newly added `<header>` uses named `grid-template-areas`, seperate from the rest of the grid.

Inspired by [Foundation](https://foundation.zurb.com/sites/docs/)/[Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) , PiGrid layout consists of an outer `container`, then `row`, then inner `pod/s`. Add the relevant classes and the layout will flow accordingly.

**How**  
Outer `container` elements are wrapped around the complete markup or individual blocks; width is modified via class modifiers: `--mini`, `--midi`, `--maxi`. There's an optional outer wrapper class for full width/height usilising `vw/vh` attributes.

Inner `row` blocks indicate the divisible aspect of the content pods e.g.:
`pigr__row pigr__row--N`- where N is the grid _fraction_ (`fr`), for the child `pod`s.

Content `pod`s use the following: `pigr__pod pigr__pod--N` - where N is the grid _fraction_ (`fr`) denoted on the parent `row`.

For example, when using `pigr__row pigr__row--6`, the inner pods could be:
- `pigr__row pigr__pod--1` and `pigr__row pigr__pod--5`
- 3x `pigr__row pigr__pod--2`
- 3x `pigr__row pigr__pod--1` and `pigr__row pigr__pod--3`

etc...

Omitting the pod size leads to the elements _auto-sizing_ in the available space, based on the sizing dictated by the parent row element. For example within `pigr__row--6`:
- 4x `pigr__pod` and 1x `pigr__row pigr__pod--2`

The **Demo** uses the class `.pigr__DEMO` to apply colour to the rows and grid items (pods).
Remove that class and it'll be colour-inert, but the layout stays intact.

For future versions I'll make a semantic mixin library version in the style of [Bourbon/Neat](https://neat.bourbon.io/) to negate the inline classes (preferable *imho*).

***QA**:*
Tested iteratively from ground-up in all decent modern browsers, with Firefox and Chrome device emulators used extensively throughout.
Remote/mobile device testing for [Chrome/Android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging) and [Safari/iPhone](https://www.kenst.com/2019/03/how-to-debug-problems-on-mobile-safari/) used occasionally.
No testing on 'actual' tablet hardware - will do when kit is available.

Edge 16+ tested intermittently in Browserstack, needs more (in progress).  
The new Edge Chromium renders it perfectly.  
Currently it blows up in I-E-*xploder* 11 - am working on this.

## Compiling - vanilla SASS style
To compile PiGrid to a compressed .scss file just run the following command:
`sass src/index.scss route/to/wherever/some-filename.scss --style compressed`

This outputs a compressed .scss file (with `.min` automatically appended), plus a source map file.
Currently the whole system compiles down to 10k *compressed*, 16k *uncompressed* (for uncompressed just omit the `--style` flag).

## Webpack setup - Dev build in localhost with maps and live-reload; Production build task.
For convenience this PiGrid example is built into the brilliant [tris-webpack-boilerplate](https://github.com/tr1s/tris-webpack-boilerplate) for static multi-page web builds. This includes a localhost server and live reloading, plus `-ms-` vendor prefixing to ensure the project works in dodgy browsers.

The ***PiGrid*** specific files are in:
- `./src/styles/`
- `./src/index.html`

Everything else is related to the webpack build.

You'll need [git](https://git-scm.com/) and [node.js](https://nodejs.org/) on your computer before running, then:

1.  `git clone https://github.com/powellian/pigrid your-project-name`

2.  `cd your-project-name && rm -rf .git`

3.  `npm install`

4.  `npm start` - fires up *localhost:8080* and live reloading for development

5. `npm run build` creates a `./dist` folder with all website assets optimized and compressed.

Fill 'yer boots!
