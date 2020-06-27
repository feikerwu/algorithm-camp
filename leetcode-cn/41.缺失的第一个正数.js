/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * 原地hash
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      // console.log('xx');
      swap(i, nums[i] - 1);
    }
  }

  // console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;

  function swap(i, j) {
    let term = nums[i];
    nums[i] = nums[j];
    nums[j] = term;
  }
};
// @lc code=end

console.log(firstMissingPositive([3, 4, -1, 1]));
