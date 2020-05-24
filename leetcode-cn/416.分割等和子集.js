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
  const dp = Array.from({ length: sum + 1 }).fill(false)
  dp[0] = true

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j > 0; j--) {
      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]])
    }
  }

  return dp[sum]
}
// @lc code=end
