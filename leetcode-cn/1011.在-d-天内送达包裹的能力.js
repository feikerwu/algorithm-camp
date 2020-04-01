/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let high = weights.reduce((acc, cur) => acc + cur)
  let low = 0

  while(low < high) {
    let mid = Math.floor((high + low) / 2)
    if (canShip(mid)) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low

  function canShip(opacity) {
    let remain = opacity
    let count = 1
    for (let weight of weights) {
      if (weight > opacity) {
        return false
      }
      remain -= weight
      if (remain < 0) {
        count++
        remain = opacity - weight
      }
      if (count > D) {
        return false
      }
    }
    return count <= D
  }
};
// @lc code=end
