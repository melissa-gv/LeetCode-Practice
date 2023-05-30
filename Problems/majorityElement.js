const majorityElement = (nums) => {
  let majorityElem
  let counter = 0
  for (let currElem of nums) {
    if (counter === 0) {
      majorityElem = currElem
      counter = 1
    } else if (majorityElem === currElem) {
      counter++
    } else {
      counter--
    }
  }
  return majorityElem
}

let nums = [2, 2, 1, 1, 1, 2, 2]
let actual = majorityElement(nums)
let expected = 2
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")
