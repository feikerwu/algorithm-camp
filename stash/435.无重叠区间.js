/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let start = 0,
    end = 0,
    res = 0;

  while (start < intervals.length) {
    end = start + 1;
    while (end < intervals.length && intervals[end][0] < intervals[start][1]) {
      res++;
      end++;
    }
    start = end;
  }

  return res;
};
// @lc code=end
