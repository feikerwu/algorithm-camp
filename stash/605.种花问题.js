/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  flowerbed = [0, ...flowerbed, 0];

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      count++;
      flowerbed[i] = 1;
    }
  }
  return count >= n;
};
// @lc code=end
