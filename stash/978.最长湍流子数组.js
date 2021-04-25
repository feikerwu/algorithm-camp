/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  let a = 1,
    b = 1,
    res = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if ((i + 1) % 2 === 1) {
      a = A[i] > A[i + 1] ? a + 1 : 1;
      b = A[i] < A[i + 1] ? b + 1 : 1;
    } else {
      a = A[i] < A[i + 1] ? a + 1 : 1;
      b = A[i] > A[i + 1] ? b + 1 : 1;
    }
    res = Math.max(res, a, b);
  }
  return res;
};
// @lc code=end
maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);
