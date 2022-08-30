/*
 * @lc app=leetcode.cn id=1963 lang=javascript
 *
 * [1963] 使字符串平衡的最小交换次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let counter = 0,
    unMatched = 0;

  for (let char of s) {
    if (char === '[') {
      counter++;
    } else if (counter > 0) {
      counter--;
    } else {
      unMatched++;
    }
  }

  return Math.ceil(unMatched / 2);
};
// @lc code=end
