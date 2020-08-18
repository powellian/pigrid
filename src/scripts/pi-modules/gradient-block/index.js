/* eslint-disable no-undef */
console.log('IN: Grad Loops');

// export default () => {
// 	let gradElements = document.querySelectorAll('.gradient-block .pigr__pod');
// 	for (let i = 0; i < gradElements.length; i++) {
// 		console.log(`gradElements: ${gradElements}`);
// 		console.log(`gradElements classes: ${gradElements.classlist}`);
// 		gradElements[i].classList.add(`gradient-block__inner--0${i}`);
// 	}
// }
// export default;


// THIS SHOULD WORK - returns Object error
// export function theGradients(theClassName) {
// const theGradients = (theClassName) => {
// 	let gradElements = document.querySelectorAll(theClassName);
// 	for (let i = 0; i < gradElements.length; i++) {
// 		console.log(`gradElements: ${gradElements[i]}`);
// 		console.log(`gradElements classes: ${gradElements[i]}`);
// 		gradElements[i].classList.add(`gradient-block__inner--0${i}`);
// 	}
// }
// export {
// 	theGradients as
// 	default
// };


/** THIS WORKS IN ISOLATION */
let gradElements = document.querySelectorAll('.gradient-block .pigr__pod');
for (let i = 0; i < gradElements.length; i++) {
	console.log(`gradElements: ${gradElements}`);
	console.log(`gradElements classes: ${gradElements.classlist}`);
	gradElements[i].classList.add(`gradient-block__inner--0${i}`);
}
// export {
// 	theGradElements as
// 	default
// };