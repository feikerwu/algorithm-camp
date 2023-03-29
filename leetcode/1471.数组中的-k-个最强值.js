/*
 * @lc app=leetcode.cn id=1471 lang=javascript
 *
 * [1471] 数组中的 k 个最强值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b);
  // 根据题意定义中位数
  const m = arr[Math.floor((arr.length - 1) / 2)];

  arr.sort((a, b) => {
    if (Math.abs(a - m) === Math.abs(b - m)) {
      return b - a;
    }
    return Math.abs(b - m) - Math.abs(a - m);
  });

  const result = arr.slice(0, k);

  return result;
};
// @lc code=end
