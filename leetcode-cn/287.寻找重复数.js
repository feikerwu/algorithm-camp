/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums = nums.sort()
  // console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i]
    }
  }
}
// @lc code=end
