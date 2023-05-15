/* eslint-disable */
var fizzBuzz = function (n) {
  for (let i = 1; i < n.length; i++) {
    if (n[i] % 3 === 0 && n[i] % 5 === 0) {
      n[i] = "FizzBuzz";
    } else if (n[i] % 3 === 0) {
      n[i] = "Fizz";
    } else if (n[i] % 5 === 0) {
      n[i] = "Buzz";
    } else {
      n[i] = n[i].toString();
    }
  }
  return n;
};
