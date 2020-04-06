/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// @lc code=end

// 用栈来解
var longestValidParentheses = function(s) {
  let stack = new Array()
  let longest = 0
  stack.push(-1)
  for(let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        longest = Math.max(longest, i - stack[stack.length - 1])
      }
    }
  }
  return longest
};