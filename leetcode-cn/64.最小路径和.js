/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length, n = grid[0].length
  let dp = Array.from({length: m + 1})
    .map(() => Array.from({length: n + 1}).fill(0))
  for(let i = 0; i <= m; i++) {
    dp[i][0] = Infinity
  }
  for(let i = 0; i <= n; i++) {
    dp[0][i] = Infinity
  }
  dp[0][1] = 0
  for(let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]
    }
  }
  // console.log(dp)
  return dp[m][n]
};
// @lc code=end

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))