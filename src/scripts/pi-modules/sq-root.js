export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

// console.log(`sq-root.js: ${initMe.square(350)}`); // 122500
// console.log(`sq-root.js: ${initMe.diag(27, 58).toFixed(5)}`); // 63.XYZ
// initMe.default;