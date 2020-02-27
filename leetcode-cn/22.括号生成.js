/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  solve(0, 0, '');
  return res;

  function solve(left, right, cur) {
    if (left === n && right === n) {
      res.push(cur)
      return
    }

    if (left >= right) {
      if (left > right) {
        left < n && solve(left + 1, right, cur + '(')
        right < n && solve(left, right + 1, cur + ')')
      } else {
        left < n && solve(left + 1, right, cur + '(')
      }
    }
  }
};
// @lc code=end

