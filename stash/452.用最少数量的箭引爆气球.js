/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 排序暴力
  // points = points.sort((a, b) => a[1] - b[1]).map(item => [...item, false]);
  // let res = 0;
  // for (let i = 0; i < points.length; i++) {
  //   if (!points[i][2]) {
  //     points[i][2] = true;
  //     res++;
  //     for (let j = i + 1; j < points.length; j++) {
  //       if (points[j][0] <= points[i][1]) {
  //         points[j][2] = true;
  //       }
  //     }
  //   }
  // }
  // return res;
  points = points.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let start = 0,
    end = 0,
    res = 0;
  while (start < points.length) {
    res++;
    while (end < points.length && points[end][0] <= points[start][1]) {
      end++;
    }
    start = end;
  }
  return res;
};
// @lc code=end

findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]);
