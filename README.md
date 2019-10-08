# PiGrid

***What**:* a CSS Grid / Flexbox system - [demo](https://powellian.com/pigrid/).

***How**:* a SCSS setup utilising a few loops and settings to generate spans for up to 12 grid-row elements, all nestable, using inline classes.

It is inspired by [Foundation](https://foundation.zurb.com/sites/docs/)/[Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/). Time allowing I'll make a semantic mixin library version in the style of [Bourbon/Neat](https://neat.bourbon.io/) to negate the inline classes (preferable *imho*).

The demo uses class `.pigr-example` to apply colour to the rows and grid items (pods); remove that class and it'll be colour-inert.

***Tested**:* iteratively in all decent modern browsers from ground-up;
Edge 16+ tested intermittently in Browserstack, needs more (in progress);
In the process of testing 'Exploder' down to version 10.

Firefox and Chrome device emulators used extensively throughout;
Chrome/Android device debugger and Safari/iPhone used occasionally;
No further testing on hardware devices - willdo when kit becomes available.

## Webpack setup
For convenience this PiGrid example is built into the brilliant [tris-webpack-boilerplate](https://github.com/tr1s/tris-webpack-boilerplate) for static multi-page web builds.

The ***PiGrid*** specific files are in:
- *./src/styles/***
- *./src/index.html*

Everything else is related to the webpack build.

You'll need [git](https://git-scm.com/) and [node.js](https://nodejs.org/) on your computer before running, then:

1.  `git clone https://github.com/powellian/pigrid your-project-name`

2.  `cd your-project-name && rm -rf .git`

3.  `npm install`

4.  `npm start`

5. `npm run build` when you're ready to upload your site to your FTP / hosting platform of choice. This will create a `dist` folder with all your website assets optimized and compressed.

Fill 'yer boots!