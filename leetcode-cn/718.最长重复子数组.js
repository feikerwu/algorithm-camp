/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// var findLength = function (A, B) {
//   A = [-1, ...A];
//   B = [-1, ...B];
//   let res = 0;
//   const dp = Array.from(A).map(() => Array.from(B).fill(0));
//   for (let i = 1; i < A.length; i++) {
//     for (let j = 1; j < B.length; j++) {
//       if (A[i] === B[j]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       }
//       res = Math.max(res, dp[i][j]);
//     }
//   }
//   return res;
// };

var findLength = function (A, B) {
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    res = Math.max(res, getSubMaxLength(A.slice(i), B));
  }
  for (let j = 0; j < B.length; j++) {
    res = Math.max(res, getSubMaxLength(A, B.slice(j)));
  }
  return res;

  function getSubMaxLength(subA, subB) {
    let count = 0,
      term = 0;
    for (let i = 0; i < Math.min(subA.length, subB.length); i++) {
      if (subA[i] === subB[i]) {
        term++;
        count = Math.max(count, term);
      } else {
        term = 0;
      }
    }
    return count;
  }
};
// @lc code=end
findLength([1, 1, 0, 0, 1], [1, 1, 0, 0, 0]);
