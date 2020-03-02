/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sumA = A.reduce((acc, cur) => acc + cur, 0)
  let sumB = B.reduce((acc, cur) => acc + cur, 0)
  let setB = new Set(B)
  const term = (sumB - sumA) / 2
  for (let i = 0; i < A.length; i++) {
    let y = term + A[i]
    if (setB.has(y)) {
      return [A[i], y]
    }
  }
};
// @lc code=end

