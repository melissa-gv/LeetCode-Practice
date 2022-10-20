/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /([^A-Z0-9])/ig;
    let sMod = s
      .replaceAll(regex, '')
      .toLowerCase()

    let stack = []

    for (let i = 0; i < sMod.length; i++) {
      if (sMod.length % 2 === 1 && i  === Math.floor(sMod.length / 2)) {
        continue;
      } else if (i < sMod.length / 2) {
        stack.push(sMod[i])
      } else if (sMod[i] === stack[stack.length - 1]) {
        stack.pop()
      } else {
          return false;
      }
    }
    return stack.length === 0 ? true : false
};