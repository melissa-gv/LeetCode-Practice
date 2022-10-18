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