/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = Array.from({ length: m + 1 }).map(_ =>
    Array.from({ length: n + 1 }).fill(0)
  );
  dp[1][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i][j] + dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m][n];
};
// @lc code=end
