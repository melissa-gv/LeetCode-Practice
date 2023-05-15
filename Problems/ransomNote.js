/* eslint-disable */
var canConstruct = function (ransomNote, magazine) {
  let magazineHT = {}
  for (let letter of magazine) {
    if (!magazineHT.hasOwnProperty(letter)) {
      magazineHT[letter] = 1
    } else {
      magazineHT[letter]++
    }
  }

  for (let ransomLetter of ransomNote) {
    if (magazineHT.hasOwnProperty(ransomLetter) && magazineHT[ransomLetter] > 0) {
      magazineHT[ransomLetter]--
    } else {
      return false
    }
  }
  return true
}

let ransomNote = "a"
let magazine = "b"
let actual = canConstruct(ransomNote, magazine)
let expected = false
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? 'Passed' : 'Failed')
