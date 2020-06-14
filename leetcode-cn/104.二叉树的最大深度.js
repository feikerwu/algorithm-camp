/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归解法
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  return root === null
    ? 0
    : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// @lc code=end
