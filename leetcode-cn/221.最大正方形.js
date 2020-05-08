/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxEdge = 0;
  const dp = matrix.slice();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = matrix[i][j];
      } else {
        dp[i][j] =
          +matrix[i][j] === 0
            ? 0
            : Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
      maxEdge = maxEdge > dp[i][j] ? maxEdge : dp[i][j];
    }
  }
  // console.log(dp);

  return maxEdge * maxEdge;
};
// @lc code=end
