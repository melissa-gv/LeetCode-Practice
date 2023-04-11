/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
  let new = new TreeNode(root)

  while (root !== null) {
    let temp
    this.left = temp
    this.left = this.right
    this.right = temp
    return invertTree(this.left)
    return invertTree(this.right)
  }

  return root;
};