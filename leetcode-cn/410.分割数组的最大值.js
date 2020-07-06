/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let dp = Array.from({ length: nums.length + 1 }).map((_) =>
    Array.from({ length: m }).fill(Infinity)
  );

  let sums = Array.from(nums);
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  console.log(sums);
  // for (let i = 0; i < nums.length; i++) {
  //   dp[i][0] = sums[i];
  // }
  // console.log({ dp });
  dp[0][0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= m; j++) {
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          Math.max(dp[k][j - 1], sums[i] - sums[k])
        );
      }
    }
  }
  console.log({ dp });
  console.log({ res: dp[nums.length][m] });

  return dp[nums.length][m];
};
// @lc code=end
splitArray([7, 2, 5, 10, 8], 2);
