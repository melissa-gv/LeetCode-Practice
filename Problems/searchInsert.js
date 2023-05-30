const searchInsert = (nums, target) => {
  let startIdx = 0
  let endIdx = nums.length - 1

  while (startIdx <= endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2)

    if (nums[midIdx] === target) return midIdx

    if (nums[midIdx] > target) {
      endIdx = midIdx - 1
    } else {
      startIdx = midIdx + 1
    }
  }
  return startIdx
}


let nums = [1, 3, 5, 6]
let target = 7
let actual = searchInsert(nums, target)
let expected = 4
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")
