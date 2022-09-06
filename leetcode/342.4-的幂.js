/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // let cur = 0;
  // while (Math.pow(4, cur) <= n) {
  //   if (Math.pow(4, cur) === n) {
  //     return true;
  //   }
  //   cur = cur + 1;
  // }
  // return false;

  if (n <= 0) {
    return false;
  }

  let x = Math.floor(Math.sqrt(n));

  return x * x === n && (x & (x - 1)) === 0;
};
// @lc code=end
