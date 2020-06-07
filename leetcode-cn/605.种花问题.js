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
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)) {
      n--
      console.log({i})
      flowerbed[i] = 1
    }
  }
  // console.log({n})
  return n <= 0
};

// @lc code=end

canPlaceFlowers([1,0,0,0,0,1], 2)