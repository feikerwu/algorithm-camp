/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = grid.map((item) => item.slice());
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      let left = i - 1 < 0 ? Infinity : dp[i - 1][j];
      let top = j - 1 < 0 ? Infinity : dp[i][j - 1];
      if (left === Infinity && top === Infinity) {
        left = top = 0;
      }
      dp[i][j] = Math.min(left, top) + grid[i][j];
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};
