/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - min)
  }
  return maxProfit
};

let prices = [7,1,5,3,6,4]
let test = maxProfit(prices)
console.log(test)

// let prices = [17,19,12,15,6,4,2,1]
// let test = maxProfit(prices)
// console.log(test)

// let prices2 = [7,6,4,3,1]
// let test2 = maxProfit(prices2)
// console.log(test2)

// var maxProfit = function(prices) {
//   let range = 0;

//   if (prices.length === 1) {
//     return 0;
//   } else {
//     for (let i = 0; i < prices.length; i++) {
//       if (prices[i + 1] !== undefined) {
//         for (let j = i + 1; j < prices.length; j++) {
//           if (prices[j] - prices[i] > range) {
//             range = prices[j] - prices[i]
//           }
//         }
//       }
//     }
//   }
//   return range
// };

// let prices = [7,1,5,3,6,4]
// let test = maxProfit(prices)
// console.log(test)

// let prices2 = [7,6,4,3,1]
// let test2 = maxProfit(prices2)
// console.log(test2)


// var maxProfit = function(prices) {
//   let left = 0
//   let right = 1
//   let maxProfit = 0

//   while (right < prices.length) {
//     console.log('initial:        ', ' left:', prices[left], ' right:', prices[right])
//     if (prices[left] < prices[right]) {
//       console.log('comparison:     ', ' left:', prices[left], ' right:', prices[right])
//       let profit = prices[right] - prices[left]
//       console.log('profit:', profit)
//       maxProfit = Math.max(profit, maxProfit)
//     } else {
//       left = right
//       console.log('ass left right:', '  left:', prices[left], ' right:', prices[right])
//     }
//     right++
//     console.log('increment right:', ' left:', prices[left], ' right:', prices[right])
//   }
//   return maxProfit
// };