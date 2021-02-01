/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum - nums[i] === preSum * 2) {
      return i;
    }
    preSum += nums[i];
  }
  return -1;
};
// @lc code=end
