/*
 * @lc app=leetcode.cn id=959 lang=javascript
 *
 * [959] 由斜杠划分区域
 */

// @lc code=start
/** 1. 每个斜杠对每个小单元格做划分，可以看作划分为4个小区域，对4个小区域做并查
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const col = grid.length;
  let count = col * col * 4;
  const f = Array.from({ length: count }).map((v, i) => i);
  const find = x => (f[x] === x ? f[x] : (f[x] = find(f[x])));
  const union = (x, y) => {
    const [rx, ry] = [find(x), find(y)];
    if (rx !== ry) {
      f[rx] = ry;
      count--;
    }
  };

  for (let i = 0; i < col; i++) {
    const str = grid[i].toString();
    for (let j = 0; j < str.length; j++) {
      const index = 4 * (i * col + j);
      if (grid[i][j] === ' ') {
        union(index + 0, index + 1);
        union(index + 1, index + 2);
        union(index + 2, index + 3);
      }
      if (grid[i][j] === '/') {
        union(index + 0, index + 3);
        union(index + 1, index + 2);
      }
      if (grid[i][j] === '\\') {
        union(index + 0, index + 1);
        union(index + 2, index + 3);
      }

      if (i + 1 < col) {
        union(index + 2, index + 4 * col + 0);
      }
      if (j + 1 < col) {
        union(index + 1, index + 4 + 3);
      }
    }
  }
  return count;
};
// @lc code=end
