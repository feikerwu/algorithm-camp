/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
  const result = [];
  function help(cur) {
    if (!cur) {
      return;
    }
    result.push(cur.val);
    if (cur.left) {
      result.push('(');
      help(cur.left);
      result.push(')');
    }

    if (cur.right) {
      result.push('(');
      help(cur.right);
      result.push(')');
    }
  }

  help(root);

  return result.join('');
};
// @lc code=end
