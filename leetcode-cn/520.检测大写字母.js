/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (isCapital(word[i])) {
      count++;
      if (count < i + 1) {
        return false;
      }
    }
  }
  return count === word.length || count <= 1;
};

function isCapital(char) {
  return char >= 'A' && char <= 'Z';
}
// @lc code=end
