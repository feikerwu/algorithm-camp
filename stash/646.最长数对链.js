/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs = pairs.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let start = 0,
    end = 0,
    res = 0;
  while (start < pairs.length) {
    res++;
    while (end < pairs.length && pairs[end][0] <= pairs[start][1]) {
      end++;
    }
    start = end;
  }
  return res;
};
// @lc code=end
