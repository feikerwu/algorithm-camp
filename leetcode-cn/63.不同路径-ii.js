/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let dp = Array.from({ length: m + 1 }).map((_) =>
    Array.from({ length: n + 1 }).fill(0)
  );

  if (obstacleGrid[0][0] === 0) {
    dp[1][1] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i - 1][j - 1] === 0) {
        dp[i][j] += dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  console.log({ dp });
  return dp[m][n];
};
// @lc code=end

uniquePathsWithObstacles([[1]]);
