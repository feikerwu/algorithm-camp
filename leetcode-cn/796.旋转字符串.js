/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) {
    return false
  }
  let len = A.length - 1
  while(len--) {
    if (leftRotateStr(A, len + 1) === B) {
      return true
    }
  }
  return false
};

// 翻转字符串
function reverseStr(str) {
  return str.split('').reverse().join('')
}
/**
 * str旋转n的字符
 * @param {*} str
 * @param {*} n
 */
function leftRotateStr(str, n) {
  let leftPart = reverseStr(str.substring(0, n))
  let rightPart = reverseStr(str.substring(n, str.length))
  return reverseStr(leftPart + rightPart)
}
// @lc code=end

console.log(leftRotateStr('gcmbf', 4))