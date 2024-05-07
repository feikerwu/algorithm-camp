/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 *
 * O(n * n)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitWithNN = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      result = Math.max(prices[j] - prices[i], result);
    }
  }
  return result;
};

var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }

  let minPriceBeforeToday = prices[0],
    result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPriceBeforeToday) {
      minPriceBeforeToday = prices[i];
    } else {
      result = Math.max(result, prices[i] - minPriceBeforeToday);
    }
  }
  return result;
};
// @lc code=end

/**
 * f(x) = f(x - 1)
 */
