/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const dp = matrix.slice();
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      dp[i][j] =
        matrix[i][j] === 0
          ? 0
          : Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
    }
  }

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      count += matrix[i][j];
    }
  }

  return count;
};
// @lc code=end

// dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]
