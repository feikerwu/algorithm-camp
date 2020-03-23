/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  const dp = Array.from({length: m + 1})
    .map(() => Array.from({length: n + 1}).fill(0))
  dp[0][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i-1][j-1]) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

