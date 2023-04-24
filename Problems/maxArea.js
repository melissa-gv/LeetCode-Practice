/* eslint-disable */
const maxArea = function (height) {
  let i = 0
  let j = height.length - 1
  let maxArea = 0

  while (i < j) {
    if (Math.min(height[i], height[j]) * (j - i) > maxArea) {
      maxArea = Math.min(height[i], height[j]) * (j - i)
    } else {
      if (height[i] < height[j]) {
        i++
      } else {
        j--
      }
    }
  }
  return maxArea
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected = 49;
console.log('Actual:', maxArea(height))
console.log("Expected:", expected);


  // while i is less than j
    // let minHeight = Math.min(height[i], height[j])
    // if minHeight & j - i > maxArea
      // update maxArea
    // else
      // move minHeight pointer towards center (if i is min, increment; if j is min, decrement)