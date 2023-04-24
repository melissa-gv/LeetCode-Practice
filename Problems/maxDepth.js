/* eslint-disable */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
const maxDepth = (root) =>{
  let depth = 0;
  if (!root) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  let bigger = Math.max(leftDepth, rightDepth);
  depth = bigger + 1
  return depth
};

// let root = [3, 9, 20, null, null, 15, 7];
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
let actual = maxDepth(root);
let expected = 3;
console.log("Actual:", actual);
console.log("Expected:", expected);
console.log(actual === expected ? true : false)