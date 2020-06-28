// 状态定义为: 在数组nums中，以i为结尾的最长上升子序列长长度，则
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

function lengthOfLIS(nums) {
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let start = 0,
      end = dp.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (dp[mid] < cur) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    if (start === dp.length) {
      dp.push(cur);
    } else {
      dp[start] = cur;
    }
  }
  return dp.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));
