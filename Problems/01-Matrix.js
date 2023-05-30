/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// const updateMatrix = (mat) => {
//   let rows = mat.length
//   let cols = mat[0].length
//   let visited = new Set()

//   for (let curRow = 0; curRow < rows; curRow++) {
//     for (let curCol = 0; curCol < cols; curCol++) {
//       if (mat[curRow][curCol] === 1) {
//         let stack = [[curRow, curCol]]
//         let depth = 0
//         let coordString = curRow.toString() + "-" + curCol.toString()
//         visited.add(coordString)
//         console.log("init stack:", stack)
//         while (stack.length > 0) {
//           depth++
//           console.log("depth after increment", depth)
//           let [row, col] = stack.pop()

//           // checks if coord hasn't been check and if in bounds
//           if (!visited.has(coordString)) {
//             if (row - 1 >= 0 && mat[row - 1][col] === 1) {
//               stack.push([row - 1, col])
//             }
//             if (row + 1 < rows && mat[row + 1][col] === 1) {
//               console.log(`pushing bottom at: [${row + 1}, ${col}]`)
//               stack.push([row + 1, col])
//             }
//             if (col - 1 >= 0 && mat[row][col - 1] === 1) {
//               stack.push([row, col - 1])
//             }
//             if (col + 1 < col && mat[row][col + 1] === 1) {
//               stack.push([row, col + 1])
//             }
//           } else {
//             // if already already seen
//             // depth += mat[row][col]
//           }
//           console.log("END of ortho check at depth:", depth)
//           console.log("stack:", stack)

//           // return
//           console.log("pre-change-val:", mat[curRow][curCol])
//           mat[curRow][curCol] = depth
//           console.log("post-change-val:", mat[curRow][curCol])
//           // console.log(mat)
//         }
//       }
//     }
//   }
//   return mat
// }

//const updateMatrix = (mat) => {
//   const rows = mat.length
//   const cols = mat[0].length
//   const visited = new Set()

//   for (let curRow = 0; curRow < rows; curRow++) {
//     for (let curCol = 0; curCol < cols; curCol++) {
//       if (mat[curRow][curCol] === 1) {
//         const stack = [[curRow, curCol]]
//         let depth = 0

//         while (stack.length > 0) {
//           depth++
//           const [row, col] = stack.pop()
//           const coordString = row.toString() + "-" + col.toString()

//           if (
//             !visited.has(coordString) ||
//             row <= 0 ||
//             col <= 0 ||
//             row < rows ||
//             col < cols
//           ) {
//             continue
//           } else {
//             break
//           }

//           visited.add(coordString)

//           if (mat[row][col] === 0) {
//             mat[curRow][curCol] = depth
//             break
//           }

//           stack.push([row - 1, col]) // top
//           stack.push([row + 1, col]) // bottom
//           stack.push([row, col - 1]) // left
//           stack.push([row, col + 1]) // right
//         }
//       }
//     }
//   }

//   return mat
// }

const updateMatrix = (mat) => {
  let q = []
  let dist = []
  let rows = mat.length
  let cols = mat[0].length

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) {
        dist[row][col] = 0
        q.push([row, col])
      } else if (mat[row][col] === 1) {
        dist[row][col] = Infinity
      }
    }
  }

  while (q) {
    let [row, col] = q.pop()

    if (row - 1 >= 0 && mat[row - 1][col] === 1) {
      q.push([row - 1, col])
    }
    if (row + 1 < rows && mat[row + 1][col] === 1) {
      q.push([row + 1, col])
    }
    if (col - 1 >= 0 && mat[row][col - 1] === 1) {
      q.push([row, col - 1])
    }
    if (col + 1 < col && mat[row][col + 1] === 1) {
      q.push([row, col + 1])
    }

    min(dist[i][j], abs(k - i) + abs(l - j))
  }


  return dist
}
// console.log(`pushing bottom at: [${row + 1}, ${col}]`)
const mat0 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]
const output0 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1],
]

// const mat = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 1, 1],
// ]
// const output = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 2, 1],
// ]

let actual = updateMatrix(mat0)
let expected = output0
// let actual = updateMatrix(mat)
// let expected = output
console.log("Actual:  ", actual)
console.log("Expected:", expected)
