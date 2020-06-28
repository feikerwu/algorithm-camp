/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let maxLength = 0;
  let dp = Array.from(intervals).fill(1);
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[i][0] >= intervals[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  maxLength = dp.reduce((a, b) => Math.max(a, b), 0);
  return dp.length - maxLength;
};
// @lc code=end
