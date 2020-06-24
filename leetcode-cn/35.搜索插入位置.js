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
  let start = 0,
    end = nums.length,
    mid;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    let midValue = nums[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};
// @lc code=end
