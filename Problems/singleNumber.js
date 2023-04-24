/* eslint-disable */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]
  let XOR = 0;
  for (let i = 0; i < nums.length; i++) {
    XOR ^= nums[i]
  }
  return XOR
};

// const nums = [1, 3, 1, -1, 3];
// const expected = -1;
// console.log("actual:", singleNumber(nums));
// console.log("expected:", expected);

// const nums1 = [2, 2, 1];
// const expected1 = 1
// console.log('actual:', singleNumber(nums1))
// console.log("expected:", expected1);

const nums2 = [1, 2, 1, 2, 4]
const expected2 = 4
console.log("actual:", singleNumber(nums2));
console.log("expected:", expected2);


