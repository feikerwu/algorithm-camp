/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length === 1) {
    return 1;
  }
  let res = 0;
  let map = {};
  let k, b;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (i !== points.length - 1) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[j];
        if (x1 - x2 === 0) {
          k = `${Infinity}-${x1}`;
          b = Infinity;
        } else {
          k = ((y2 - y1) / (x2 - x1)).toFixed(16);
          b = ((x1 * y2 - x2 * y1) / (x1 - x2)).toFixed(16);
        }
        let key = `${k}-${b}`;
        map[key] = map[key] || [];
        if (map[key].indexOf(i) === -1) {
          map[key].push(i);
        }
        if (map[key].indexOf(j) === -1) {
          map[key].push(j);
        }
      }
    }
  }
  console.log(map);
  for (let [, value] of Object.entries(map)) {
    res = Math.max(value.length, res);
  }
  console.log({ res });
  return res;
};
// @lc code=end
maxPoints([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 4],
  [3, 3],
]);
