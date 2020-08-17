/* eslint-disable no-undef */
console.log('IN: Grad Loops');

// export default (greeting) => {
// export const gradientLoops(greeting) => {
// const gradientLoops(greeting) => {
// 	return greeting;
// }


// export default (theClassName) => {
// 	// let gradElements = document.querySelectorAll('.gradient-loop__inner');
// 	let gradElements = document.querySelectorAll(theClassName);

// 	for (let i = 0; i < gradElements.length; i++) {
// 		console.log(`gradient elements: ${gradElements[i]}`);
// 	}
// }
// export default;


// THIS SHOULD WORK - returns Object error
// export function theGradients(theClassName) {
// const theGradients = (theClassName) => {
// 	// export function theGradients(theClassName) {
// 	let gradElements = document.querySelectorAll(theClassName);

// 	for (let i = 0; i < gradElements.length; i++) {
// 		console.log(`gradient elements: ${gradElements[i]}`);
// 	}
// }
// export {
// 	theGradients as
// 	default
// };


/** THIS WORKS IN ISOLATION */
let gradElements = document.querySelectorAll('.gradient-loop__inner');
for (let i = 0; i < gradElements.length; i++) {
	console.log(`gradient elements: ${gradElements[i]}`);
}
// theGradElements();

// export {
// 	theGradElements as
// 	default
// };

// gradientLoops("Hello from inside");

// (global => {
// 	const MY_CONSTANT = 'api key or something'
// 	let counter = 0
// 	let some_array = [1, 2, 34, 5, 6, 7]

// 	counter = some_array.reduce(total, item) => total + item
// })(window)