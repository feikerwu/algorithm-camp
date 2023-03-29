/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 *
 * [1161] 最大层内元素和
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
 * @return {number}
 */
var maxLevelSum = function (root) {
  const arr = [-Infinity];

  function help(cur, deepth) {
    if (!cur) {
      return;
    }

    if (!arr[deepth]) {
      arr[deepth] = 0;
    }

    arr[deepth] += cur.val;

    help(cur.left, deepth + 1);
    help(cur.right, deepth + 1);
  }

  help(root, 1);

  let result = 0,
    max = arr[0];

  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      result = i;
    }
  }

  return result;
};

// @lc code=end
