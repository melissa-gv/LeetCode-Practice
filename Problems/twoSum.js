/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
// /**

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const compHT = {}
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i]
    if (compHT.hasOwnProperty(nums[i])) {
      return [i, compHT[nums[i]]]
    }
    compHT[comp] = i
  }
}

const nums = [2, 7, 11, 15]
const target = 9

const test = twoSum(nums, target)
console.log(test)
