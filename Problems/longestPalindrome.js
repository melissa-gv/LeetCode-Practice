/* eslint-disable */
var longestPalindrome = function (s) {
  let charsHT = {}
  let count = 0
  let addSingleChar = false
  for (let char of s) {
    if (!charsHT.hasOwnProperty(char)) {
      charsHT[char] = 1
    } else {
      charsHT[char]++
    }
  }
  console.log("pre-charsHT:", charsHT)
  for (let char in charsHT) {
    count += (Math.floor(charsHT[char] / 2)) * 2
    charsHT[char] -= (Math.floor(charsHT[char] / 2)) * 2
    if (charsHT[char] === 1 && !addSingleChar) {
      count += 1
      addSingleChar = true
    }
  }
  console.log("post-charsHT:", charsHT)
  return count
}

let s = "abccccdd"
let actual = longestPalindrome(s)
let expected = 7
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")


  // if (charsHT[char] === 1 && !addSingleChar) {
  //     count += 1
  //     charsHT[char] = 0
  //     addSingleChar = true
  //   }
  //     if (charsHT[char] % 2 === 0) {
  //       count += charsHT[char]
  //       charsHT[char] = 0
  //     } else if (charsHT[char] % 2 === 1 && charsHT[char] > 1) {
  //       if (!addSingleChar) {
  //         count += Math.ceil(charsHT[char] / 2)
  //         charsHT[char] -= Math.ceil(charsHT[char] / 2)
  //         addSingleChar = true
  //         console.log("count:", count)
  //       } else {
  //         count += Math.floor(charsHT[char] / 2)
  //         charsHT[char] -= Math.floor(charsHT[char] / 2)
  //         console.log("count !addsingle:", count)
  //       }