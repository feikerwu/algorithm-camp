/*
 * @lc app=leetcode.cn id=1269 lang=javascript
 *
 * [1269] 停在原地的方案数
 */

// @lc code=start
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const mod = Math.pow(10, 9) + 7;
  const dp = Array.from({ length: arrLen }).map(item =>
    Array.from({ length: steps }).fill(0)
  );
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < steps; j++) {
      if (j === 0) {
        dp[i][j] = 0;
      }
      if (i === j) {
        dp[i][j] = 1;
      }
    }
  }

  for (let i = 0; i < arrLen; i++) {
    for (let j = 1; j < steps; j++) {
      if (i === 0) {
        dp[i][j] = (dp[i][j - 1] + dp[i + 1][j - 1]) % mod;
      } else if (i === arrLen - 1) {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j - 1]) % mod;
      } else {
        dp[i][j] = (dp[i][j - 1] + dp[i][j - 1] + dp[i + 1][j - 1]) % mod;
      }
    }
  }

  console.log(dp);
  return dp[0][steps - 1] * 2;
};
// @lc code=end
