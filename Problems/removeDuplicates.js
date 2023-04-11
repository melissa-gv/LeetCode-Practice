/**
 * @param {number[]} nums
 * @return {number}
 */

/* eslint-disable */
const removeDuplicates = (nums) => {
  for (let i = 0, j = 1; i < nums.length - 1;) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1)
    } else {
      i++
      j++
    }
  }
  return nums.length
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const output = 5
console.log('answer:', output)
console.log("my answer:", removeDuplicates(nums))