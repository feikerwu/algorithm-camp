const { group } = require('console');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  let m = grid.length;
  let n = grid.length;
  let dp = Array.from({ length: m + 2 }).map((v) =>
    Array.from({ length: n + 2 }).fill(-Infinity)
  );

  if (grid[0][0] !== -1) {
    dp[1][1] = grid[0][0];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (grid[i - 1][j - 1] !== -1) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        grid[i - 1][j - 1] = 0;
      }
    }
  }

  if (dp[m][n] === -Infinity) {
    return 0;
  }

  for (let i = m; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      if (grid[i - 1][j - 1] !== -1) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]) + grid[i][j];
      }
    }
  }

  return dp[1][1];
};
