/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  for (let i = 0; i < A.length; i++) {
    if ((i % 2 === 0 && A[i] % 2 === 0) || (i % 2 === 1 && A[i] % 2 === 1)) {
      continue;
    }

    if (i % 2 === 0 && A[i] % 2 === 1) {
      for (let j = i + 1; j < A.length; j++) {
        if (j % 2 === 1 && A[j] % 2 === 0) {
          swap(i, j);
          break;
        }
      }
    }

    if (i % 2 === 1 && A[i] % 2 === 0) {
      for (let j = i + 1; j < A.length; j++) {
        if (j % 2 === 0 && A[j] % 2 === 1) {
          swap(i, j);
          break;
        }
      }
    }
  }
  return A;

  function swap(i, j) {
    A[i] = A[i] ^ A[j];
    A[j] = A[i] ^ A[j];
    A[i] = A[i] ^ A[j];
  }
};
// @lc code=end
