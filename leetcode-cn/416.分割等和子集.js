/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0)
  if (sum % 2) {
    return false
  }
  sum = sum / 2
  nums = nums.sort((a, b) => b - a)
  if (sum < nums[0]) {
    return false
  }
  return dfs(nums, sum, sum, 0)
}

function dfs(nums, pick, discard, cur) {
  if (pick === 0 || discard === 0) {
    return true
  }

  if (pick < 0 || discard < 0 || cur > nums.length) {
    return false
  }

  return (
    dfs(nums, pick - nums[cur], discard, cur + 1) ||
    dfs(nums, pick, discard - nums[cur], cur + 1)
  )
}
// @lc code=end
