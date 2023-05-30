
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const middleNode = (head) => {
  let fast = head

  while (fast && fast.next) {
    head = head.next
    fast = fast.next.next
  }
  return head
}

// const middleNode = (head) => {
//   if (!head.next.next) return head.next
//   let fast = head

//   while (fast.next && fast.next.next) {
//     head = head.next
//     fast = fast.next.next
//     if (fast.next && !fast.next.next) {
//       head = head.next
//     }
//   }
//   return head
// }


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
// head.next.next.next.next.next = new ListNode(6)
console.log(traverseLL(head))



let actual = middleNode(head)
let expected = head.next.next
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? "Passed" : "Failed")
