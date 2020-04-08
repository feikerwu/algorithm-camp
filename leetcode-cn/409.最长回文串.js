/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * 数学题，所有出现偶数的都可以用来构造回文，所有 >3 出现的奇数次odd
 * 的字母都可以拿 odd - 1 个字符用来构造，最后如果有出现奇数次，可以拿一个字符出来构造
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let arr = new Array(100).fill(0)
  for(let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 'A'.charCodeAt()]++
  }
  let sum = 0
  let flag = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      flag = 1
      sum += (arr[i] >= 3 ? arr[i] - 1 : 0)
    } else {
      sum += arr[i]
    }
  }
  return sum + flag
};
// @lc code=end

