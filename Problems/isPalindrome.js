/* eslint-disable */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let string = x.toString()

  for (let i = 0, j = string.length - 1; i < Math.floor(string.length/2); i++, j--) {
    if (string[i] !== string[j]) {
      return false
    }
  }
  return true
}

const x = -121
console.log(isPalindrome(x))