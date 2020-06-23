/*
 * @lc app=leetcode.cn id=823 lang=javascript
 *
 * [823] 带因子的二叉树
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var numFactoredBinaryTrees = function (A) {
  A.sort((a, b) => a - b);
  console.log(A);
  let values = Array.from(A).fill(1);
  let keys = {};
  for (let i = 0; i < A.length; i++) {
    keys[A[i]] = i;
  }
  console.log({ keys });
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (A[i] % A[j] === 0) {
        let right = A[i] / A[j];
        if (typeof keys[right] !== 'undefined') {
          values[i] = values[i] + values[j] * values[keys[right]];
        }
      }
    }
  }

  // console.log(values);

  return values.reduce((a, b) => (a + b) % (1e9 + 7), 0);
};

// @lc code=end
