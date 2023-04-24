/* eslint-disable */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sMod = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let i = 0;
  let j = sMod.length - 1;

  while (i < j) {
    if (sMod[i] === sMod[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

let str1 = "mom"; // T
let str2 = "deed";// T
let str3 = "deeds";// F
let str4 = "A man, a plan, a canal: Panama"; // T
let str5 = "0P"; // F


let test = isPalindrome(str1);
console.log(test);

let test2 = isPalindrome(str2);
console.log(test2);

let test3 = isPalindrome(str3);
console.log(test3);

let test4 = isPalindrome(str4);
console.log(test4);

let test5 = isPalindrome(str5);
console.log(test5);
