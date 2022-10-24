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
    } else {
      return false
    }
  }

  for (char in hash) {
    return hash[char] === 0 ? true : false
  }
};