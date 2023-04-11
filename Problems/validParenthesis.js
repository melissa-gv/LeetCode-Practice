/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  let parens = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  const open = new Set(['(', '{', '['])
  const close = new Set([')', '}', ']'])
  let stack = []

  for (element of s) {
    if (open.has(element)) {
      stack.push(element)
    } else if (close.has(element)) {
      if (parens[element] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false
};

let testInput = "()[]{}"
let test = isValid(testInput)
console.log('true', test)

let testInput2 = "(]"
let test2 = isValid(testInput2)
console.log('false', test2)

let testInput3 = "["
let test3 = isValid(testInput3)
console.log('false', test3)

let testInput4 = "[]("
let test4 = isValid(testInput4)
console.log('false', test4)

let testInput5 = "([]"
let test5 = isValid(testInput5)
console.log('false', test4)
