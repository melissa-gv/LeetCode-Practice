/* eslint-disable */ /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        for (let i = 0; i < matrix[row].length; i++) {
          matrix[row][i] = "x";
        }
        for (let j = 0; j < matrix.length; j++) {
          matrix[j][col] = "x";
        }
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "x") {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
};

// let input = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
// let output = [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1],
// ]
let input = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let output = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
console.log("output:", setZeroes(input));
console.log("answer:", output);
