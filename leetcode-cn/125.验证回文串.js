/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let legalS = ''
  for(let i = 0; i < s.length; i++) {
    if (/\d|[A-Za-z]/.test(s[i])) {
      legalS += s[i].toLowerCase()
    }
  }
  return judge(legalS)
};

function judge(s) {
  let [start, end] = [0, s.length - 1]
  while(start < end) {
    if (s[start++] !== s[end--]) {
      return false
    }
  }
  return true
}
// @lc code=end

