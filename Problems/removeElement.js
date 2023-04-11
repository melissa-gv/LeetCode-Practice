/* eslint-disable */
const removeElement = (nums, val) => {
  let k = 0
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}

const nums = [3, 2, 2, 3];
const val = 3;
console.log("answer:", 2);
console.log("my answer:", removeElement(nums, val));
