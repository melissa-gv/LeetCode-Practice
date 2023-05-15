class MyStack {
  constructor() {
    this.q1 = []
  }

  push(x) {
    this.q1.push(x)
    while (this.q1[this.q1.length - 1] !== x) {
      this.q1.push(this.q1.pop())
    }
  }

  pop() {
    return this.q1.pop()
  }

  top() {
    return this.q1[this.q1.length - 1]
  }

  empty() {
    return !this.q1.length
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 */
const obj = new MyStack()
obj.push(1)
obj.push(2)
console.log(obj.top())
console.log(obj.pop())
console.log(obj.empty())
