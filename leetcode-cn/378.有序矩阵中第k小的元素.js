/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * */

var kthSmallest = function (matrix, k) {
  return matrix.flat(Infinity).sort((a, b) => a - b)[k - 1];
};
