/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
  const startPixelVal = image[sr][sc]
  if (startPixelVal === color) return image
  const queue = [[sr, sc]]
  let currCoord

  const orthogonalCheck = () => {
    sr = currCoord[0]
    sc = currCoord[1]

    if (sc - 1 >= 0) {
      if (image[sr][sc - 1] === startPixelVal) {
        queue.unshift([sr, sc - 1])
      }
    }

    if (sc + 1 < image[0].length) {
      if (image[sr][sc + 1] === startPixelVal) {
        queue.unshift([sr, sc + 1])
      }
    }

    if (sr - 1 >= 0) {
      if (image[sr - 1][sc] === startPixelVal) {
        queue.unshift([sr - 1, sc])
      }
    }

    if (sr + 1 < image.length) {
      if (image[sr + 1][sc] === startPixelVal) {
        queue.unshift([sr + 1, sc])
      }
    }
  }

  while (queue.length > 0) {
    currCoord = queue.pop()
    image[currCoord[0]][currCoord[1]] = color
    orthogonalCheck()
  }
  return image
}

// const image = [
//   [0, 1, 2, 0],
//   [0, 0, 2, 2],
//   [1, 1, 2, 2],
//   [1, 0, 2, 1],
// ]

// const postImage = [
//   [0, 1, 3, 0],
//   [0, 0, 3, 3],
//   [1, 1, 3, 3],
//   [1, 0, 3, 1],
// ]
// const testImage1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
// const answer = [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1],
// ]

const testImage2 = [[0, 0, 0], [0, 0, 0]]
// const answer2 = [[0, 0, 0], [0, 0, 0]]

const sr = 0
const sc = 0
const color = 0
console.log(floodFill(testImage2, sr, sc, color))
