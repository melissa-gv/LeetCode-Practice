/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  let hash = {}
  for (char of s) {
    if (hash.hasOwnProperty(char)) {
      hash[char]++
    } else {
      hash[char] = 1
    }
  }

  for (char of t) {
    if (hash.hasOwnProperty(char)) {
      hash[char]--
      if (hash[char] === 0) delete hash[char]
    } else {
      return false
    }
  }

  // return (Object.keys(hash).length === 0)
  for (char in hash) {
    return false
  }
  return true
}

let s = "anagram"
let t = "nagaram"
let test1 = isAnagram(s, t)
console.log(test1)

let u = "rat"
let v = "car"
let test2 = isAnagram(u, v)
console.log(test2)

let w = "aacc"
let x = "ccac"
let test3 = isAnagram(w, x)
console.log(test3)

let y = "aabbbb"
let z = "aaaabb"
let test4 = isAnagram(y, z)
console.log(test4)