/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s3.length !== s1.length + s2.length) {
    return false;
  }

  // 定义 dp[i][j] 为由 s1[0...i-1] 和 s2[0...j-1]组成的交错字符串s[0, i + j - 1]可能性

  const dp = Array.from({ length: s1.length + 1 }).map(() =>
    Array.from({ length: s2.length + 1 }).fill(false)
  );

  dp[0][0] = true;

  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  console.log(dp);

  return dp[s1.length][s2.length];
};
// @lc code=end
