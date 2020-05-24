LU
/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * 数学题
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  return Math.floor(Math.sqrt(n * 2 + 0.25) - 0.5)
}
// @lc code=end
