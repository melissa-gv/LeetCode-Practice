const insert = (intervals, newInterval) => {
  let [newStart, newEnd] = newInterval
  let [left, right] = [[], []]

  for (const i of intervals) {
    if (i[1] < newStart) {
      left.push(i)
    } else if (i[0] > newEnd) {
      right.push(i)
    } else {
      newStart = Math.min(i[0], newStart)
      newEnd = Math.max(i[1], newEnd)
    }
  }
  return [...left, [newStart, newEnd], ...right]
}


// let intervals = [[1, 3],[6, 9]]
// let newInterval = [2, 5]
// let expected = [[1,5],[6,9]]

let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
let newInterval = [4, 8]
let expected = [[1,2],[3,10],[12,16]]

console.log(intervals)
console.log(newInterval)

let actual = insert(intervals, newInterval)

console.log("Actual  :", actual)
console.log("Expected:", expected) 
// console.log(actual === expected ? "Passed" : "Failed")


// const insert = (intervals, newInterval) => {
//   let newIntFound = false
//   let newIntIdx = 0
//   let [newStart, newEnd] = newInterval

//   for (let i = 0; i < intervals.length; i++) {
//     // finds new interval start
//     if (!newIntFound && intervals[i][1] >= newStart) {
//       newIntFound = true
//       newIntIdx = i
//       intervals[i][0] = Math.min(intervals[i][0], newStart)
//       console.log("after updating  pos 0", intervals)
//     }

//     // splices unnecessary intervals
//     if (newIntFound && intervals[i][0] > newStart && intervals[i][1] < newEnd) {
//       console.log("splicing")
//       intervals.splice(i, 1)
//       i--
//     }

//     // marges interval end
//     // top scenario - end of inserted interval is going to be newEnd < i+ 1[0]
//     if (newIntFound && intervals[i + 1] && intervals[i + 1][0] > newEnd) {
//       console.log("top scenario")
//       intervals[newIntIdx][1] = Math.max(intervals[i][1], newEnd)
//     } else if (
//       newIntFound &&
//       intervals[i][0] <= newEnd &&
//       intervals[i][1] >= newEnd
//     ) {
//       console.log("bottom scenario")
//       intervals[newIntIdx][1] = Math.max(intervals[i][1], newEnd)
//       intervals.splice(i, 1)
//       i--
//     }
//   }
//   return intervals
// }