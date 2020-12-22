/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = [];
  let flag = true;
  let cur = [];
  if (root) {
    cur.push(root);
  }
  while (cur.length) {
    // 前置处理
    let next = [];
    let values = [];
    // 程序主逻辑
    for (let node of cur) {
      values.push(node.val);
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    if (!flag) {
      values.reverse();
    }
    // 事后处理
    cur = next;
    res.push(values);
    flag = !flag;
  }
  return res;
};
// @lc code=end
