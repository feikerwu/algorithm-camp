/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  nums.unshift(0);
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i]]) {
      swap(nums[i], i);
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== i) {
      res.push(i);
    }
  }

  return res;

  function swap(i, j) {
    let term = nums[i];
    nums[i] = nums[j];
    nums[j] = term;
  }
};
// @lc code=end
