/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 如果以当前价格为卖出点，那么当前价格之前的每一个价格都可能是买入点
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = Infinity;
  let res = 0;
  for (let price of prices) {
    if (price < low) {
      low = price;
    }
    res = Math.max(res, price - low);
  }
  return res;
};
// @lc code=end
