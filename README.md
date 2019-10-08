# PiGrid

*What:* a CSS Grid / Flexbox system - [demo](https://powellian.com/pigrid/).

*How:* a SCSS setup utilising a few loops and settings to generate spans for up to 12 grid-row elements, all nestable, using inline classes.

It's inspired by [Foundation](https://foundation.zurb.com/sites/docs/)/[Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/), but time allowing I'll work on a semantic build method using grid mixins in the style of [Bourbon/Neat](https://neat.bourbon.io/) to negate the inline classes (preferable *imho*).

The demo uses class `.pigr-example` to apply colour to the rows and grid items (pods); remove that class and it'll be colour-inert. It's moderately opinionated and includes a bunch of mixins and typography settings.

***Caveats:***
It was tested iteratively while building in all decent modern browsers; Edge 16+ tested intermittently in Browserstack but needs more (in progress), and I'm in the process of testing 'the other one' down to version 10.

I used Firefox and Chrome device emulators extensively, and hooked up my Samsnug Android to Chrome device debugger and will do the same with an iPhone in Safari. But there been no other testing on 'real' hardware devices.

## Webpack setup
For convenience this PiGrid example is built into the brilliant [tris-webpack-boilerplate](https://github.com/tr1s/tris-webpack-boilerplate) for static multi-page web builds. Install the dependencies, fire it up and do what you want.

Here are the steps for build etc:

You need [git](https://git-scm.com/) and [node.js](https://nodejs.org/) on your computer before running.

1.  `git clone https://github.com/powellian/pigrid your-project-name`

2.  `cd your-project-name && rm -rf .git`

3.  `npm install`

4.  `npm start`

5. `npm run build` when you're ready to upload your site to your FTP / hosting platform of choice. This will create a `dist` folder with all your website assets optimized and compressed.

Fill 'yer boots!