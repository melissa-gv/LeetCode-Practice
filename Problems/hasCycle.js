/* eslint-disable */
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const hasCycle = (head) => {
  if (!head) return false

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}


let head = new ListNode(3)
let pos = new ListNode(2)
head.next = pos
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(-4)
head.next.next.next.next = pos


let actual = hasCycle(head)
let expected = true
console.log("Actual:", actual)
console.log("Expected:", expected)

