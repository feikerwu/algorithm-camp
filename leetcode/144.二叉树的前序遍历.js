/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [];

  stack.push(root);

  while (stack.length) {
    const curNode = stack.pop();
    result.push(curNode.val);

    if (curNode.right) {
      stack.push(curNode.right);
    }

    if (curNode.left) {
      stack.push(curNode.left);
    }
  }

  return result;
};
// @lc code=end
