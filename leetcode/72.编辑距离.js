/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const len1 = word1.length,
    len2 = word2.length;

  const dp = Array.from({ length: len1 + 1 }).map(_ =>
    Array.from({ length: len2 + 1 }).fill(0)
  );

  for (let i = 0; i < len1 + 1; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i < len2 + 1; i++) {
    dp[0][i] = i;
  }

  console.log(dp);

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        dp[i + 1][j + 1] = Math.min(
          dp[i][j + 1] + 1,
          dp[i + 1][j] + 1,
          dp[i][j]
        );
      } else {
        dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
      }
    }
  }

  return dp[len1][len2];
};
// @lc code=end

minDistance('', 'a');
