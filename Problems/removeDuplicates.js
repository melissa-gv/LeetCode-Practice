/**
 * @param {number[]} nums
 * @return {number}
 */

/* eslint-disable */

const removeDuplicates = (nums) => {
  let i = 0
  let j = 1

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      // if (j > i + 1) {
      //   [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
      // }
      [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
      i++;
      j++;
    }
  }
  console.log(nums)
  return i + 1
};
// start j  with 1 in front of i
// if same, 
  // increment j
// if diff
  // swap j & i+1
  // increment both i & j

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums = [1, 2, 3, 4, 5, 6];
const output = 6;
console.log("actual", removeDuplicates(nums));
console.log("expected:", output);



// const removeDuplicates = (nums) => {
//   let i = 0;
//   let j = 1;

//   while(j < nums.length) {
//     if(nums[i] !== nums[j]) {
//       if(j > i + 1) {
//         [nums[i+1], nums[j]] = [nums[j], nums[i+1]];
//       }
//       i++;
//     }
//     j++;
//   }

//   return i+1;
// };