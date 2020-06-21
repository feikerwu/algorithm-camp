/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  let res = [];
  let start = 0;
  for (let end = 1; end <= S.length; end++) {
    if (S[end] !== S[end - 1] || end === S.length) {
      if (end - start >= 3) {
        res.push([start, end - 1]);
      }
      start = end;
    }
  }
  return res;
};
// @lc code=end
