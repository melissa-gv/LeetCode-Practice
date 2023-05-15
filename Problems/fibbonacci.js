/* eslint-disable */
/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}


let actual = fib(3)
let expected = 2
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? true : false)