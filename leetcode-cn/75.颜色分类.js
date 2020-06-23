/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0,
    end = nums.length - 1,
    i = 0;

  while (i <= end) {
    nums[i] === 0 ? swap(start++, i++) : nums[i] === 2 ? swap(end--, i) : i++;
  }

  function swap(a, b) {
    if (a === b) {
      return;
    }
    nums[a] = nums[a] ^ nums[b];
    nums[b] = nums[a] ^ nums[b];
    nums[a] = nums[a] ^ nums[b];
  }
};

// sortColors([2])
// @lc code=end
