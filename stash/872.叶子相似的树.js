/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {};

function getLeaves(root) {
  function inorder(cur, res) {
    if (!cur) {
      return;
    }

    inorder(left);
    if (cur && cur.left === null && cur.right === null) {
      res = `${res}${cur.val}`;
    }
    inorder(right);
    return res;
  }
}

// @lc code=end
