const containsDuplicate = function(nums) {
    let setLen = new Set(nums).size
    return setLen !== nums.length 
}


let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
let actual = containsDuplicate(nums)
let expected = true
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")