/* eslint-disable */
const numIslands = (grid) => {
  let islandCount = 0;
  let queue = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        queue.unshift([row, col]);
        grid[row][col] = "-1";
        while (queue.length > 0) {
          let curNode = queue.pop();
          let curRow = curNode[0];
          let curCol = curNode[1];

          const processOrthogonal = (row, col) => {
            if (grid[row][col] === "1") {
              grid[row][col] = "-1";
              queue.unshift([row, col]);
            }
          };

          if (curRow - 1 >= 0) {
            processOrthogonal(curRow - 1, curCol);
          }

          if (curRow + 1 < grid.length) {
            processOrthogonal(curRow + 1, curCol);
          }

          if (curCol - 1 >= 0) {
            processOrthogonal(curRow, curCol - 1);
          }

          if (curCol + 1 < grid[curRow].length) {
            processOrthogonal(curRow, curCol + 1);
          }

        }
        islandCount++;
      }
    }
  }
  return islandCount;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
let expected = 3;
let actual = numberOfIslands(grid);
console.log('Actual:', actual);
console.log("Expected:", expected);

// let grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// let expected = 1;
// let actual = numberOfIslands(grid);
// console.log("Actual:", actual);
// console.log("Expected:", expected);
// traverse grid
// if current is 1,
// flip to -1
// check top, bottom, left, right for 1s
// add each to queue until you've processes all connected 1s
// increment island count

// return islandCount
