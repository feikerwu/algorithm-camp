/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  let root = null;
  mid = Math.floor(nums.length / 2);
  console.log({ mid, nums });
  root = new TreeNode(nums[mid]);

  let leftPart = nums.slice(0, mid);
  let rightPart = nums.slice(mid + 1);
  root.left = sortedArrayToBST(leftPart);
  root.right = sortedArrayToBST(rightPart);
  return root;
};
// @lc code=end
