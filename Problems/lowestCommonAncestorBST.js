/* eslint-disable */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

  // traverse BST starting at root
  // if curNode is >= P && curNode <= Q, return curNode val
  // if curNode is > P, go left
  // if curNode is < P, go right
const lowestCommonAncestor = (root, p, q) => {
  // set min to be the smallest of P & Q; set max
  const minVal = Math.min(p.val, q.val)
  const maxVal = Math.max(p.val, q.val)
  console.log(minVal)
  console.log(maxVal);
  let curNode = root;
  while (curNode) {
    if (curNode.val >= minVal && curNode.val <= maxVal) return curNode;

    if (curNode.left !== null && curNode.val > minVal) {
      curNode = curNode.left;
    } else if (curNode.right !== null && curNode.val < minVal) {
      curNode = curNode.right;
    }
  }
  return undefined;
};

// Test Case 1
// const root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
const p = root.right.left;
const q = root.right.right;
console.log("my answer:", lowestCommonAncestor(root, p, q));
console.log("answer:", 8);

// Test Case 3
// input: [2, 1]
// let root = new TreeNode(2);
// root.left = new TreeNode(1);

// Test Case 20
// input: [2, 1]
// let root = new TreeNode(2);
// root.right = new TreeNode(3);

// const p = root.left
// const q = root
// console.log("my answer:", lowestCommonAncestor(root, p, q));
// console.log("answer:", 2);


    // if ((curNode.left === null || curNode.val >= p.val) && (curNode.right === null || curNode.val <= q.val)) return curNode;
