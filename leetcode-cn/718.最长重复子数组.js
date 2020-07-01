/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  A = [-1, ...A];
  B = [-1, ...B];
  let res = 0;
  const dp = Array.from(A).map(() => Array.from(B).fill(0));
  for (let i = 1; i < A.length; i++) {
    for (let j = 1; j < B.length; j++) {
      if (A[i] === B[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};
// @lc code=end
