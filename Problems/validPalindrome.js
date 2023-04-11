/* eslint-disable */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /([^A-Z0-9])/gi;
  let sMod = s.replaceAll(regex, "").toLowerCase();

  console.log("sMod", sMod);
  let stack = [];

  for (let i = 0; i < sMod.length; i++) {
    if (sMod.length % 2 === 1 && i === Math.floor(sMod.length / 2)) {
      console.log("continue", sMod[i]);
      console.log("sMod[i + 1]", sMod[i + 1], stack[stack.length - 1]);
      continue;
    } else if (i < sMod.length / 2) {
      stack.push(sMod[i]);
      console.log("pushed stack:", stack);
    } else if (sMod[i] === stack[stack.length - 1]) {
      console.log("here");
      stack.pop();
      console.log("popped stack:", stack);
    } else {
      return false;
    }
  }
  console.log("stack:", stack);
  return stack.length === 0 ? true : false;
};

let str1 = "mom";
let str2 = "deed";
let str3 = "deeds";
let str4 = "A man, a plan, a canal: Panama";

let test = isPalindrome(str3);
console.log(test);
