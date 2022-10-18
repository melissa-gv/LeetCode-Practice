/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let compObj = {}
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]
    if (compObj[nums[i]] === undefined) {
      compObj[comp] = i
    } else {
      return [i, compObj[nums[i]]]
    }
  }
  return;
};