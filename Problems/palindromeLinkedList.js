/**
 * Definition for singly-linked list.




 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* eslint-disable */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
const isPalindrome = (head) => {
  let slow, fast = head
  let temp, prev

  // finds middle
  while (fast && fast.next) {
    // floyd's middle
    slow = slow.next
    fast = fast.next.next
  }

  // reverse the back half
  let newSlow = null
  while (slow) {
    let oldNextNode = slow.next

    slow.next = newSlow

    newSlow = slow

    slow = oldNextNode

  }


}
