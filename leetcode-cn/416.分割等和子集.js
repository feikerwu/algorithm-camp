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
  } else {
    sum = sum / 2
  }

  const dp = Array.from(nums).map(() =>
    Array.from({ length: sum + 1 }).fill(false)
  )
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true
  }

  for (let i = 0; i < dp.length - 1; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      dp[i + 1][j] =
        j - nums[i] >= 0 ? dp[i][j] || dp[i][j - nums[i]] : dp[i][j]
    }
  }

  return dp[nums.length - 1][sum]
}
// @lc code=end
