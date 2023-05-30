/* eslint-disable */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
const diameterOfBinaryTree = (root) => {
  const dfs = (root) => {
    if (!root) return 0
  
    let left = dfs(root.left)
    let right = (dfs(root.right))

    return 1 + Math.max(left, right)
  }
  return dfs(root)
}

// let root = [1, 2, 3, 4, 5]
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
let actual = diameterOfBinaryTree(root)
let expected = 3
console.log("Actual:", actual)
console.log("Expected:", expected)
console.log(actual === expected ? true : false)
