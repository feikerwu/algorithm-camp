/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  const dirs = [
    [0, 1],
    [-1, 1],
    [1, 0],
    [1, -1],
  ];

  let dirIndex = 0,
    index = 0,
    x = 0,
    y = 0;
  let curDir = dirs[dirIndex];
  const res = [];
  while (index < matrix.length * matrix[0].length) {
    while (index < matrix.length * matrix[0].length && isOK(x, y)) {
      res.push(matrix[x][y]);
      [x, y] = [x + curDir[0], y + curDir[1]];
      index++;
    }
    dirIndex = (dirIndex + 1) % dirs.length;
    curDir = dirs[dirIndex];
    [x, y] = [x + curDir[0], y + curDir[1]];
    index++;
  }

  function isOK(x, y) {
    return x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length;
  }

  return res;
};
// @lc code=end
