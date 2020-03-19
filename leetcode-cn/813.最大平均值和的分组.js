/*
 * @lc app=leetcode.cn id=813 lang=javascript
 *
 * [813] 最大平均值和的分组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
  let term  = 0;
  // 快速求数组某段区间和
  let sum = A.map(item => {
    term = term + item
    return term
  })

  let dp = Array.from({length: A.length + 1}).map(item => Array.from({length: K + 1}).fill(0))
  for(let i = 1; i <= A.length; i++) {
    dp[i][1] = sum[i - 1] / i
  }

  for (let i = 1; i <= A.length; i++) {
    for (let j = 2; j <= K && j <= i; j++) {
      for(let p = 1; p < i; p++) {
        dp[i][j] = Math.max(dp[i][j], dp[p][j-1] + (sum[i-1] - sum[p-1]) / (i - p))
      }
    }
  }
  return dp[A.length][K]
};
// @lc code=end

console.log(largestSumOfAverages([1,2,3,4,5,6,7], 4))
