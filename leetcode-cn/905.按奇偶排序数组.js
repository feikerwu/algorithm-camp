/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let start = 0,
    end = A.length - 1;
  while (start < end) {
    if (A[start] % 2 > A[end] % 2) {
      swap(start, end);
      start++;
      end--;
    }
    if (A[start] % 2 === 0) {
      start++;
    }
    if (A[end] % 2 === 1) {
      end--;
    }
  }
  return A;

  function swap(start, end) {
    let term = A[start];
    A[start] = A[end];
    A[end] = term;
  }
};
// @lc code=end
sortArrayByParity([1, 3]);
