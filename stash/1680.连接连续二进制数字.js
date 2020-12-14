/*
 * @lc app=leetcode.cn id=1680 lang=javascript
 *
 * [1680] 连接连续二进制数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const mod = Math.pow(10, 9) + 7;
var concatenatedBinary = function (n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    let len = i.toString(2).length;
    // res = ((res << len) | i) % mod;
    res = (res * Math.pow(2, len) + i) % mod;
    // console.log(res);
  }
  return res;
};
// @lc code=end

concatenatedBinary(12);
