/* eslint-disable */
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
 * @return {boolean}
 */

// /**
//  * Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// const isBalanced = (root) => {
//   if (!root) {
//     return root;
//   }

//   let firstLeafDepthSet = false;
//   let firstLeafDepth = 0;
//   let curDepthCount = 0;
//   let queue1 = [root];
//   let queue2 = [];
//   let activeQueue = true;

//   let curNode;

//   while (queue1.length !== 0 || queue2.length !== 0) {
//     if (activeQueue) {
//       curNode = queue1.pop();
//     } else {
//       curNode = queue2.pop();
//     }

//     if (curNode.left) {
//       if (activeQueue) {
//         queue2.unshift(curNode.left);
//       } else {
//         queue1.unshift(curNode.left);
//       }
//     } else {
//       if (!firstLeafDepthSet) {
//         firstLeafDepth = curDepthCount;
//         firstLeafDepthSet = true;
//         console.log("firstLeafDepth:", firstLeafDepth);
//       }
//     }

//     if (curNode.right) {
//       if (activeQueue) {
//         queue2.unshift(curNode.right);
//       } else {
//         queue1.unshift(curNode.right);
//       }
//     } else {
//       if (!firstLeafDepthSet) {
//         firstLeafDepth = curDepthCount;
//         firstLeafDepthSet = true;
//         console.log("firstLeafDepth:", firstLeafDepth);
//       }
//     }

//     if (activeQueue) {
//       if (queue1.length === 0 && queue2.length !== 0) {
//         activeQueue = !activeQueue;
//         curDepthCount++;
//       }
//     } else {
//       if (queue2.length === 0 && queue1.length !== 0) {
//         activeQueue = !activeQueue;
//         curDepthCount++;
//       }
//     }

//     if (curDepthCount - firstLeafDepth > 1) {
//       console.log("curDepthCount:", curDepthCount);
//       return false;
//     }
//   }

//   return true;
// };

const isBalanced = (root) => {
  if (!root) {
    return root;
  }

  let minLeafDepthSet = false;
  let minLeafDepth = 0;
  let curDepthCount = 0;
  let queue1 = [root];
  let queue2 = [];
  let activeQueue = true;
  let curNode;

  while (queue1.length !== 0 || queue2.length !== 0) {
    if (activeQueue) {
      curNode = queue1.pop();
    } else {
      curNode = queue2.pop();
    }

    if ((curNode.left === null || curNode.right === null) && !minLeafDepthSet) {
      minLeafDepth = curDepthCount;
      minLeafDepthSet = true;
      console.log('minLeafDepth node val:', curNode.val)
      console.log('minLeafDepth:', minLeafDepth)
    }

    if (curNode.left) {
      if (activeQueue) {
        queue2.unshift(curNode.left);
      } else {
        queue1.unshift(curNode.left);
      }
    }

    if (curNode.right) {
      if (activeQueue) {
        queue2.unshift(curNode.right);
      } else {
        queue1.unshift(curNode.right);
      }
    }

    if (activeQueue) {
      if (queue1.length === 0 && queue2.length !== 0) {
        activeQueue = !activeQueue;
        curDepthCount++;
      }
    } else {
      if (queue2.length === 0 && queue1.length !== 0) {
        activeQueue = !activeQueue;
        curDepthCount++;
      }
    }

    if (minLeafDepthSet && curDepthCount - minLeafDepth > 1) {
      console.log("curDepthCount:", curDepthCount, 'minLeafDepth:', minLeafDepth)
      return false;
    }
  }

  return true;
};

// Test Case 1 - Expected TRUE
// [3, 9, 20, null, null, 15, 7]; TRUE
// let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

// Test Case 2 - Expected False
// [1,2,2,3,3,null,null,4,4]
// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(3);
// root.left.left.left = new TreeNode(4);
// root.left.left.right = new TreeNode(4);

// Test Case 215 - Expected TRUE
// [1,2,3,4,5,6,null,8]
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.left.left = new TreeNode(8);
console.log("Actual:  ", isBalanced(root));
console.log("Expected:", true);

// Test Case 4 - Expected FALSE
// let root = new TreeNode(6);
// root.left = new TreeNode(2);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(7);
// root.right.right = new TreeNode(9);
// root.left.right.left = new TreeNode(3);
// root.left.right.left = new TreeNode(5);
// root.left.right.left.left = new TreeNode(0);
// root.left.right.left.right = new TreeNode(4);
// root.left.right.left.left.left = new TreeNode(0);
// root.left.right.left.left.right = new TreeNode(5);

