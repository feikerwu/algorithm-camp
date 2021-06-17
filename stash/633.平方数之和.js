/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = 1; i * i < c; i++) {
    for (let j = 1; j * j < c; j++) {
      if (i * i + j * j === c) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
