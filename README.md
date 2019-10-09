# PiGrid  
![GitHub release (latest by date)](https://img.shields.io/github/v/release/powellian/pigrid)  ![GitHub](https://img.shields.io/github/license/powellian/pigrid)

***What**:*
CSS-Grid/Flexbox grid system - [demo](https://powellian.com/pigrid/).  
A SCSS setup utilising a few loops and a bunch of settings to generate up to 12 grid-row elements, all nestable, using inline classes.  Utilises [BEM](https://css-tricks.com/bem-101/) throughout.

***How**:*  
Inspired by [Foundation](https://foundation.zurb.com/sites/docs/)/[Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) , PiGrid layout consists of an outer `container`, then `row`, then inner `pod`. Add the relevant classes and the SCSS will automatically apply the layout.

`container` elements can be wrapped around the complete markup or individual blocks; width easily set via class modifiers: `--mini`, `--midi`, `--maxi`.
There's also an optional outer wrapper class for full width/height usilising `vw/vh` attributes.

The demo uses the `.pigr-example` class to apply colour to the rows and grid items (pods); remove that class and it'll be colour-inert.

Time allowing I'll make a semantic mixin library version in the style of [Bourbon/Neat](https://neat.bourbon.io/) to negate the inline classes (preferable *imho*).

***QA**:*  
Tested iteratively from ground-up in all decent modern browsers, with Firefox and Chrome device emulators used extensively throughout.
Remote/mobile device testing for [Chrome/Android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging) and [Safari/iPhone](https://www.kenst.com/2019/03/how-to-debug-problems-on-mobile-safari/) used occasionally.
No testing on 'actual' tablet hardware - will do when kit is available.

Edge 16+ tested intermittently in Browserstack, needs more (in progress);
In the process of testing 'Exploder' down to version 10.

## Webpack setup  
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
