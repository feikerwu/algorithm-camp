/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums = [1, ...nums, 1];
  const dp = Array.from(nums, (v) => Array.from(nums).fill(0));
  // for (let i = 0; i < nums.length; i++) {
  //   dp[i][i] = nums[i];
  // }

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
        );
      }
    }
  }

  return dp[0][dp.length - 1];
};

maxCoins([3, 1, 5, 8]);
