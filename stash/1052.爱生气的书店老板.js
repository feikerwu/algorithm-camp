/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

const { access } = require("fs");

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  grumpy = customers.map((c, i) => c * grumpy[i])
  let maxGrumpSize = -Infinity
  let termGrumpSize = 0
  for (let i = 0; i < grumpy.length; i++) {
    termGrumpSize += i < X ? grumpy[i] : grumpy[i] - grumpy[i - X]
    maxGrumpSize = Math.max(maxGrumpSize, termGrumpSize)
  }

  return sum(customers) - sum(grumpy) + maxGrumpSize

  function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0)
  }
};
// @lc code=end

