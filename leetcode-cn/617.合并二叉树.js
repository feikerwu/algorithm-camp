/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  let t = new TreeNode();
  if (t1 === null && t2 === null) {
    return null;
  } else if (t1 !== null && t2 === null) {
    t.val = t1.val;
    t.left = mergeTrees(t1.left, null);
    t.right = mergeTrees(t1.right, null);
  } else if (t1 === null && t2 !== null) {
    t.val = t2.val;
    t.left = mergeTrees(null, t2.left);
    t.right = mergeTrees(null, t2.right);
  } else {
    t.val = t1.val + t2.val;
    t.left = mergeTrees(t1.left, t2.left);
    t.right = mergeTrees(t1.right, t2.right);
  }
  return t;
};
// @lc code=end
