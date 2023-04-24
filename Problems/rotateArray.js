/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* eslint-disable */
var rotate = function (nums, k) {
  console.log('k:', k, 'nums.length:', nums.length)
  k = k % nums.length
  console.log(k)
  const reverse = function (arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const k = 5
const expected = [4, 5, 6, 7, 8, 1, 2, 3];

// const nums = [1, 2];
// const k = 3;
// const expected = [2, 1];

// const nums = [1, 2, 3];
// const k = 4;
// const expected = [3, 1, 2];

// const nums = [1, 2, 3, 4, 5, 6, 7]
// const k = 3
// const expected = [5, 6, 7, 1, 2, 3, 4]

const actual = rotate(nums, k);
console.log("actual:", actual);
console.log("expected:", expected);
