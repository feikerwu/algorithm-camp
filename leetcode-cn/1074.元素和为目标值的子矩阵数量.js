/*
 * @lc app=leetcode.cn id=1074 lang=javascript
 *
 * [1074] 元素和为目标值的子矩阵数量
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j]
    }
  }

  let res = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let map = {}
      let term = 0;
      for (let k = 0; k < matrix.length; k++) {
        term += matrix[k][j] - matrix[k][i]
      }
      if (term === target) {
        res++
      }

      if (map[term - target]) {
        res = res + map[term - target]
      }
      map[term] = (map[term] || 0) + 1
    }
  }
  return res;
};
// @lc code=end

