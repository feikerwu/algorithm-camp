/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let cur = 0
  let res = A.map(item => {
    cur = ((cur << 1) + item) % 5
    return cur === 0
  })
  return res
};
// @lc code=end
/**
 * 数学运算，取模原理
 */
