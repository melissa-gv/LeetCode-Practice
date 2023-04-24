/* eslint-disable */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let connectedOnes = 0;
      if (grid[row][col] === 1) {
          const processOrthogonal = (x, y) => {
            if (grid[x][y] === 1) {
              connectedOnes++
            }
          }
          if (row - 1 >= 0) {
            processOrthogonal(row - 1, col)
          }

          if (row + 1 < grid.length) {
            processOrthogonal(row + 1, col);
          }

          if (col - 1 >= 0) {
            processOrthogonal(row, col - 1);
          }

          if (col + 1 < grid[0].length) {
            processOrthogonal(row, col + 1);
          }
          perimeter += 4 - connectedOnes;
        }
      }
    }
    return perimeter
}

// let grid1 = [
//   [0, 1, 0, 0],
//   [1, 1, 1, 0],
//   [0, 1, 0, 0],
//   [1, 1, 0, 0],
// ];
// let expected1 = 16;
// console.log("Actual:", islandPerimeter(grid1));
// console.log("Expected:", expected1);

// let grid2 = [[1, 0]];
// let expected2 = 4;
// console.log("Actual:", islandPerimeter(grid2));
// console.log("Expected:", expected2);


let grid3 = [
  [1, 1],
  [1, 1],
];
let expected3 = 8;
console.log("Actual:", islandPerimeter(grid3));
console.log("Expected:", expected3);


// var islandPerimeter = function (grid) {
//   let perim = 0;
//   let queue = [];
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === 1) {
//         queue.push([i, j]);
//         while (queue.length !== 0) {
//           let curNode = queue.pop();
//           let row = curNode[0];
//           let col = curNode[1];
//           grid[row][col] = -1;
//           let conOnes = 0;

//           const processOrthogonal = (x, y) => {
//             if (grid[x][y] === 1) {
//               queue.unshift([x, y]);
//               grid[x][y] = -1;
//             }
//             if (Math.abs(grid[x][y]) === 1) {
//               conOnes++;
//             }
//           };

//           // Top
//           if (row - 1 >= 0) {
//             processOrthogonal(row - 1, col);
//           }

//           if (row + 1 < grid.length) {
//             processOrthogonal(row + 1, col);
//           }

//           if (col - 1 >= 0) {
//             processOrthogonal(row, col - 1);
//           }

//           if (col + 1 < grid[0].length) {
//             processOrthogonal(row, col + 1);
//           }

//           perim += 4 - conOnes;
//         }
//         return perim;
//       }
//     }
//   }
//   return 0;
// }