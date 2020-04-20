/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * 最好得分为 A[i] + A[j] + i - j, 对每一个j(j >= 0 && j < n)
 * A[j] = A[j] - j 都是固定的，问题可以化简为要找是A[i] + i (i < j)
 * 的最大值
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let maxPre = A[0]
  let res = -Infinity
  for(let i = 1; i < A.length; i++) {
    res = Math.max(res, A[i] - i + maxPre)
    maxPre = Math.max(maxPre, A[i] + i)
  }

  return res;
};
// @lc code=end

