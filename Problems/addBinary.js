/*
sum 0 -> 0
sum 1 -> 1
sum 2 -> 0 carry 1

carry 11
      011
      001
      ---
      100
*/
const addBinary = function (a, b) {
  let aPlace = a.length - 1
  let bPlace = b.length - 1
  let carry = 0
  let result = ''
  
  while (aPlace >= 0 || bPlace >= 0 || carry !== 0 ) {
    if ((Number(a[aPlace]) || 0) + (Number(b[bPlace]) || 0) + carry === 0) {
      result = "0" + result
      carry = 0
    } else if ((Number(a[aPlace]) || 0) + (Number(b[bPlace]) || 0) + carry === 1) {
      result = "1" + result
      carry = 0
    } else if ((Number(a[aPlace]) || 0) + (Number(b[bPlace]) || 0) + carry === 2) {
      result = "0" + result
      carry = 1
    } else {
      result = "1" + result
      carry = 1
    }
    aPlace--
    bPlace--
  }
  return result
}

let a = "1010"
let b = "1011"
let expected = '10101'

// let expected = "11110"
// let a = "1111"
// let b = "1111"

// let expected = "110110"
// let a = "100"
// let b = "110010"

let actual = addBinary(a, b)
console.log("Actual:  ", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")
