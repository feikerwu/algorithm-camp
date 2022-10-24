/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0,
    end = 1,
    result = Infinity,
    counter = nums[start];

  while (start < nums.length && end <= nums.length) {
    if (counter < target) {
      counter = counter + nums[end];
      end++;
    } else {
      result = Math.min(result, end - start);
      counter = counter - nums[start];
      start++;
    }
  }

  return result === Infinity ? 0 : result;
};
// @lc code=end
