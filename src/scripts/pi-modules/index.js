/**
 * Project Files
 * @description Pi Imports: ./pi-modules
 */

// import * as addSomeContent from './add-content-click'
// addSomeContent.default('btnWrite2', 'subEl2');
// addSomeContent.addContent('btnWrite1', 'subEl1');

/** WORKS WITH: THIS WORKS IN ISOLATION */
// import './gradient-block/index';

import * as theGradients from './gradient-block';
theGradients.default();

// import * as theGradientsImported from './gradient-loops/index';
// import theGradients from './gradient-loops/index';

// THIS SHOULD WORK - returns Object error
// import {
// 	theGradients
// } from './gradient-loops/index';
// theGradients('.gradient-block .pigr__pod');

// import {
// 	// gradElements('.gradient-block .pigr__pod');
// 	// eslint-disable-next-line no-unused-vars
// 	gradElements
// } from './gradient-block/index';

// import theGradElements as
// default from './gradient-block/index';
// theGradElements();