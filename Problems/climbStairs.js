const climbStairs = (n) => {
  let arr = [1, 2]

  let i
  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  return arr[n- 1]
}

let actual = climbStairs(2)
let expected = 2

console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")

// const climbStairs = (n) => {
//   let arr = [1, 2]
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2]
//     console.log("arr at:", i, ":", arr)
//   }
//   return arr[n - 1]
// }
