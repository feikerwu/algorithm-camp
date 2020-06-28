var lengthOfLIS = function (nums) {
  const dp = Array.from(nums).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp.reduce((a, b) => Math.max(a, b), 0);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));
