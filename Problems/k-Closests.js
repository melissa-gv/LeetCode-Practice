class Node {
  constructor(dist, coords) {
    this.dist = dist
    this.coords = coords
  }
}

class MinBinaryHeap {
  constructor() {
    this.heap = []
  }

  printHeap() {
    return this.heap
  }

  bubbleUp() {
    let curNodeIdx = this.heap.length - 1
    while (curNodeIdx > 0) {
      let parentIdx = Math.floor(curNodeIdx - 1 / 2)
      if (this.heap[curNodeIdx].dist < this.heap[parentIdx].dist) {
        [this.heap[parentIdx], this.heap[curNodeIdx]] = [this.heap[curNodeIdx], this.heap[parentIdx]]
        curNodeIdx = parentIdx
      } else {
        return
      }
    }
  }

  insert(node) {
    this.heap.push(node)
    this.bubbleUp()
    return
  }

  extractMin() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap[0].coords

    let min = this.heap.splice(0, 1)
    this.heap.unshift(this.heap.pop())
    this.sinkDown()
    return min[0].coords
  }

  sinkDown() {
    let curNodeIdx = 0

    while (true) {
      let leftIdx = (curNodeIdx + 1) * 2 - 1
      let rightIdx = (curNodeIdx + 1) * 2 + 1 - 1
      let leftNode = this.heap[leftIdx] || null
      let rightNode = this.heap[rightIdx] || null
      let smallestChildIdx

      if (!leftNode && !rightNode) {
        break;
      } else if (leftNode && !rightNode) {
        smallestChildIdx = leftIdx
      } else {
        smallestChildIdx = leftNode.dist < rightNode.dist ? leftIdx : rightIdx
      }

      if (this.heap[curNodeIdx].dist > this.heap[smallestChildIdx].dist) {
        [this.heap[curNodeIdx], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[curNodeIdx]]
        curNodeIdx = smallestChildIdx
      } else {
        break;
      }
    }
  }
}

const kClosest = (points, k) => {
  let minHeap = new MinBinaryHeap()
  for (let coord of points) {
    let dist = coord[0] ** 2 + coord[1] ** 2
    let newNode = new Node(dist, coord)
    minHeap.insert(newNode)
  }

  console.log(minHeap.printHeap())
  let result = []
  while (k > 0) {
    let min = minHeap.extractMin()
    result.push(min)
    k--
  }
  return result
}

// let points = [[1, 3], [-2, 2]]
// let k = 1
// let expected = [[-2, 2]]

// let points = [[3,3],[5,-1],[-2,4]]
// let k = 2
// let expected = [[3,3],[-2,4]]

// let points = [[0,1],[1,0]]
// let k = 2
// let expected = [[0,1],[1,0]]

let points = [[-66,42],[-67,94],[46,10],[35,27],[-9,-6],[-84,-97],[38,-22],[3,-39],[71,-97],[-40,-86],[-45,56],[-91,59],[24,-11],[91,100],[-68,43],[34,27]]
let k = 6
let expected = [[-9,-6],[24,-11],[3,-39],[34,27],[38,-22],[35,27]]
// should not be in result: 46, 10 -> 2216
// should be in result: 38, -22 -> 1928


let actual = kClosest(points, k)
// let expected = [[3,3],[-2,4]]
console.log("Actual:  ", actual)
console.log("Expected:", expected)
