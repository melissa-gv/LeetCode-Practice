/* eslint-disable */
const climbStairs = (n) => {
  let arr = [1, 2]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
    console.log('arr at:',i, ':', arr)
  }
  return arr[n - 1]
}

let actual = climbStairs(4)
let expected = 5

console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")
