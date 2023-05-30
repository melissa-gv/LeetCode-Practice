const maxSubArray = (nums) => {
  let maxSum = nums[0]
  let currSum = 0
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i])
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let expected = 6
// let nums = [-2, 1]
// let nums = [-1, -2]
// let expected = -1
let actual = maxSubArray(nums)
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")


// Time Limit Exceeded
// const maxSubArray = (nums) => {
//   if (nums.length === 1) return nums[0]

//   let maxSum = -Infinity
//   for (let i = 0; i < nums.length; i++) {
//     let currSum = nums[i]
//     for (let j = i + 1; j <= nums.length; j++) {
//       maxSum = Math.max(maxSum, currSum)
//       if (j === nums.length) {
//         currSum += 0
//       } else {
//         console.log("i:", nums[i])
//         console.log("j:", nums[j])
//         currSum += nums[j]
//       }
//       maxSum = Math.max(maxSum, currSum)
//     }
//   }
//   return maxSum
// }