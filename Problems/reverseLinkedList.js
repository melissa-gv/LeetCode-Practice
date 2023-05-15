/* eslint-disable */ 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const reverseList = (head) => {
  if (head === null) return null
  let prev = null
  let curr = head

  while (curr !== null) {
    let next = curr.next

    curr.next = prev

    prev = curr
    curr = next
  }

  head = prev
  return head
}

const traverseLL = (head) => {
  let listArray = []
  while (head !== null) {
    listArray.push(head.val) 
    head = head.next
  }
  return listArray
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

console.log(traverseLL(head))

let actual = reverseList(head)
let expected = [5, 4, 3, 2, 1]
console.log("Actual:", actual)
console.log("Expected:", expected)


