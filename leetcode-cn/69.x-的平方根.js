/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid < x) {
      left = mid;
    } else {
      right = mid + 1;
    }
  }
};
// @lc code=end
