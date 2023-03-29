/*
 * @lc app=leetcode.cn id=1726 lang=javascript
 *
 * [1726] 同积元组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const res = nums[i] * nums[j];
      if (!map[res]) {
        map[res] = 0;
      }
      map[res] = map[res] + 1;
    }
  }

  let result = 0;
  for (let key in map) {
    const term = map[key];

    result = result + term * (term - 1) * 4;
  }

  return result;
};
// @lc code=end
