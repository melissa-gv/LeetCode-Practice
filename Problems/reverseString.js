/* eslint-disable */
const reverseString = function (s) {
  let i = 0
  let j = s.length - 1

  while (i <= j) {
    [s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }
  return s
}

let s = ["h", "e", "l", "l", "o"]
let actual = reverseString(s)
let expected = ["o", "l", "l", "e", "h"]
console.log("Actual:  ", actual)
console.log("Expected:", expected)
// console.log(actual === expected ? true : false)
