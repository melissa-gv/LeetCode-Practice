/* eslint-disable max-len */
 /* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  let row
  let col
  for (row = 0; row < mat.length; row++) {
    for (col = 0; col < mat[0].length; col++) {
      if (mat[row][col] !== 0) return
    }
  }

  let visited = []
  let hashTable = {
    0: [],
  }

  let currCoord = [row, col]
  let depth = Number(Object.keys(hashTable)[Object.keys(hashTable).length - 1] + 1)

  const orthogonalCheck = () => {
    // left
    if (row - 1 >= 0) {
      if (mat[row - 1][col] === 0) {
        mat[currCoord[0]][currCoord[1]] = depth
        return
      }
      if (!visited.includes([row - 1, col])) {
        hashTable[depth].push([row - 1, col])
        visited.push([row - 1, col])
      }
    }
    // right
    if (row + 1 >= mat.length) {
      if (mat[row + 1][col] === 0) {
        mat[currCoord[0]][currCoord[1]] = depth
        return
      }
      if (!visited.includes([row + 1, col])) {
        hashTable[depth].push([row + 1, col])
        visited.push([row + 1, col])
      }
    }
    // top
    if (col - 1 >= 0) {
      if (mat[row][col - 1] === 0) {
        mat[currCoord[0]][currCoord[1]] = depth
        return
      }
      if (!visited.includes([row, col - 1])) {
        hashTable[depth].push([row, col - 1])
        visited.push([row, col - 1])
      }
    }
    // bottom
    if (col + 1 <= mat[0].length) {
      if (mat[row][col + 1] === 0) {
        mat[currCoord[0]][currCoord[1]] = depth
        return
      }
      if (!visited.includes([row, col + 1])) {
        hashTable[depth].push([row, col + 1])
        visited.push([row, col + 1])
      }
    }
  }
  
  // iterate through HT values array for cur Depth
  Object.values(hashTable[depth - 1]).forEach((coord) => {
    orthogonalCheck() 
  })
}



const mat0 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
const output0 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]
const output = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1],
]
console.log(output0)
console.log(updateMatrix(mat0))


  // for (; row < mat.length; row++) {
  //   for (; col < mat[0].length; col++) {

  //   }
  // }