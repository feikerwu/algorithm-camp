/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  let bit = 1;
  for (let i = 0; i < 32; i++) {
    bit = bit << i;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (bit & nums[i]) {
        count++;
      }
    }
    if (count % 3 !== 0) {
      res = res | bit
    }
  }
  return res;
};
// @lc code=end

