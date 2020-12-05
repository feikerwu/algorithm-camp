/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = (left + right) >> 1;
    const middleValue = nums[middle];
    if (middleValue === target) {
      return middle;
    } else if (middleValue < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

searchInsert([1, 3, 5, 6], 5);

// @lc code=end
