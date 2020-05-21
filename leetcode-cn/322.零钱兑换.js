/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = {}
  function dp(am) {
    if (memo[am]) {
      return memo[am]
    }
    if (am === 0) {
      return 0
    }
    if (am < 0) {
      return -1
    }

    let curMin = Infinity
    for (let i = 0; i < coins.length; i++) {
      let cur = dp(am - coins[i])
      curMin = cur === -1 ? curMin : Math.min(curMin, cur + 1)
    }

    memo[am] = curMin === Infinity ? -1 : curMin

    return memo[am]
  }
  return dp(amount)
};
// @lc code=end

