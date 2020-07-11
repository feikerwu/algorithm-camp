/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * 动态规划，规划方向从下往上，dp[i][j]的含义为从当前点到目标需要的健康点数目。
 * dp[i][j] = Math.max(1, Math.min(dp[i][j+1], dp[i+1][j]) - dungeon[i][j])
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;
  let dp = Array.from(dungeon, (v) => Array.from(v).fill(1));
  dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    dp[m - 1][i] = Math.max(1, dp[m - 1][i + 1] - dungeon[m - 1][i]);
  }

  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = Math.max(
        1,
        Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
      );
    }
  }
  return dp[0][0];
};
// @lc code=end
