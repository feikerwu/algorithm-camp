/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const peak = stack => stack[stack.length - 1];

var reverseParentheses = function (s) {
  let stack = [];

  for (let char of s) {
    if (char === ')') {
      let term = [];
      while (peak(stack) !== '(' && stack.length) {
        term.push(stack.pop());
      }

      if (peak(stack) === '(') {
        stack.pop();
      }

      stack.push(...term);
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
// @lc code=end

reverseParentheses('(abcd)');
