/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  if (a.length < b.length) {
    [a, b] = [b, a]
  }
  let res = ''
  let carry = 0

  for(let i = 0; i < a.length; i++) {
    let term = parseInt(a[i]) + parseInt(b[i] || 0) + carry
    carry = parseInt(term / 2)
    term = term % 2
    res = `${term}${res}`
  }

  if (carry > 0) {
    res = `${carry}${res}`
  }

  return res;
};
// @lc code=end

