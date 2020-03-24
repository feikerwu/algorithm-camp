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
var minDistance = function(word1, word2) {
  let dp = Array.from({length: word1.length + 1}).map(() => Array.from({length: word2.length + 1}).fill(0));
  for(let i = 0; i <= word1.length; i++) {
    dp[i][0] = i
  }
  for(let j = 0; j <= word2.length; j++) {
    dp[0][j] = j
  }
  for(let i = 1; i <= word1.length; i++) {
    for(let j = 1; j <= word2.length; j++) {
      if (word1[i-1] !== word2[j-1]) {
        dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
      } else {
        dp[i][j] = dp[i-1][j-1]
      }
    }
  }
  // console.log(dp)
  return dp[word1.length][word2.length]
};
// @lc code=end

