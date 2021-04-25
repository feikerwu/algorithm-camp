/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // const cols = matrix.length;
  // const rows = matrix.length ? matrix[0].length : 0;
  // let transfromed = Array.from({ length: rows }).map(_ =>
  //   Array.from({ length: cols })
  // );
  // for (let i = 0; i < cols; i++) {
  //   for (let j = 0; j < rows; j++) {
  //     transfromed[j][i] = matrix[i][j];
  //   }
  // }
  // return transfromed;

  return matrix[0].map((_, idx) => matrix.map(col => col[idx]));
};
// @lc code=end
