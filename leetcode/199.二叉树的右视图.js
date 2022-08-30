/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  let trees = [],
    cur = [root];

  trees.push(cur);

  while (cur.length) {
    let next = [];

    for (let node of cur) {
      if (node && node.left) {
        next.push(node.left);
      }

      if (node && node.right) {
        next.push(node.right);
      }
    }

    cur = next;

    trees.push(next);
  }

  let result = [];

  for (let level of trees) {
    level = level.filter(node => node !== null);
    if (level.length) {
      result.push(level.pop().val);
    }
  }

  return result;
};
// @lc code=end
