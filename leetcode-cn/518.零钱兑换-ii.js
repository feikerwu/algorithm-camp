/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array.from({ length: amount + 1 }).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      dp[j] = dp[j] + (j - coins[i] >= 0 ? dp[j - coins[i]] : 0)
    }
  }
  return dp[amount]
}

// @lc code=end

change(5, [1, 2, 5])
