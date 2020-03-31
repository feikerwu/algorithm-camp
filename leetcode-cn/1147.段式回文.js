/*
 * @lc app=leetcode.cn id=1147 lang=javascript
 *
 * [1147] 段式回文
 */

// @lc code=start
/**
 * 贪心解法，
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  if (text === '') {
    return 0
  }
  for(let i = 1; i <= text.length / 2; i++) {
    if (text.substring(0, i) === text.substring(text.length - i)) {
      return 2 + longestDecomposition(text.substring(i, text.length - i))
    }
  }
  return 1
};
// @lc code=end

console.log(longestDecomposition('elvtoelvto'))