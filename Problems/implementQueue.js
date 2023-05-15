/* eslint-disable */
class MyQueue {
  constructor() {
    this.s1 = []
    this.s2 = []
  }
  push(x) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
    this.s2.push(x)

    while (this.s2.length) {
      this.s1.push(this.s2.pop())
    }
  }

  pop() {
    return this.s1.pop()
  }

  peek() {
    return this.s1[this.s1.length - 1]
  }

  empty() {
    return !this.s1.length
  }
}


var obj = new MyQueue()
obj.push(1)
console.log(obj)
obj.push(2)
console.log(obj)
var param_2 = obj.peek()
var param_3 = obj.pop()
var param_4 = obj.empty()
console.log(obj)
console.log('peek:', obj, param_2)
console.log("pop:", obj, param_3)
console.log("empty:", obj, param_4)


// let actual = funcName()
// let expected = 3
// console.log("Actual:", actual)
// console.log("Expected:", expected)
// console.log(actual === expected ? true : false)
