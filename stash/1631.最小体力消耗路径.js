/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 *
 * [1631] 最小体力消耗路径
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const col = heights.length;
  const row = heights[0].length;
  const edges = [];
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (i !== 0) {
        edges.push([
          (i - 1) * row + j,
          i * row + j,
          Math.abs(heights[i - 1][j] - heights[i][j]),
        ]);
      }
      if (j !== 0) {
        edges.push([
          i * row + j - 1,
          i * row + j,
          Math.abs(heights[i][j - 1] - heights[i][j]),
        ]);
      }
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  const father = Array.from({ length: row * col }).map((v, i) => i);

  const find = x =>
    father[x] === x ? father[x] : (father[x] = find(father[x]));
  const union = (x, y) => {
    const [rx, ry] = [find(x), find(y)];
    if (rx !== ry) {
      father[rx] = ry;
    }
  };
  const isConnected = (x, y) => find(x) === find(y);
  for (let [x, y, weight] of edges) {
    union(x, y);
    if (isConnected(0, col * row - 1)) {
      return weight;
    }
  }
  return 0;
};
// @lc code=end
minimumEffortPath([
  [4, 3, 4, 10, 5, 5, 9, 2],
  [10, 8, 2, 10, 9, 7, 5, 6],
  [5, 8, 10, 10, 10, 7, 4, 2],
  [5, 1, 3, 1, 1, 3, 1, 9],
  [6, 4, 10, 6, 10, 9, 4, 6],
]);
