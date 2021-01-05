/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let res = [];
  let [start, end] = [0, 0];
  while (start < s.length && end < s.length) {
    if (s[end] !== s[start]) {
      if (end - start >= 3) {
        res.push([start, end - 1]);
      }
      start = end;
    }
    end++;
  }
  if (end - start >= 3) {
    res.push([start, end - 1]);
  }
  return res;
};
// @lc code=end
