/*
 * @lc app=leetcode.cn id=2108 lang=javascript
 *
 * [2108] 找出数组中的第一个回文字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    if (isPalindromeString(word)) {
      return word;
    }
  }

  return '';
};

function isPalindromeString(str) {
  const len = str.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }

  return true;
}
// @lc code=end
