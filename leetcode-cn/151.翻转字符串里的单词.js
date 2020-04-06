/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 *
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim().split(/\s+/).map(word => reverseStr(word)).join(' ')
  return reverseStr(s)
};

function reverseStr(str) {
  return str.split('').reverse().join('')
}


// @lc code=end

