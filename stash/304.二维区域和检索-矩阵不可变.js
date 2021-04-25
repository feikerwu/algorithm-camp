/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.data = matrix;
  const prefixSums = [];
  for (let i = 0; i < matrix.length; i++) {
    let term = [];
    let curPrefixSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      curPrefixSum += matrix[i][j];
      term.push(curPrefixSum);
    }
    prefixSums.push(term);
  }
  this.prefixSums = prefixSums;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const { prefixSums, data } = this;
  let result = 0;
  for (let i = row1; i <= row2; i++) {
    result = prefixSums[i][col1] - prefixSums[i][col2] + data[row1][col1];
  }
  return result;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
