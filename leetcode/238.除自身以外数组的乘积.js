/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = nums.slice();

  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] = result[i + 1] * result[i];
  }

  // console.log(result);

  result[0] = result[1];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] * nums[i];
    result[i] = nums[i - 1] * (result[i + 1] || 1);
  }

  return result;
};
// @lc code=end
