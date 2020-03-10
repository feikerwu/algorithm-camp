/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let res = Infinity
  let pre = null
  inorder(root)
  return res;

  function inorder(root) {
    if (root === null) {
      return
    }

    inorder(root.left)
    if (pre) {
      res = Math.min(res, Math.abs(root.val - pre.val))
    }
    pre = root
    inorder(root.right)
  }
};
// @lc code=end

