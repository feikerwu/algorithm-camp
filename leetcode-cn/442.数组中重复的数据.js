/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = [];
  nums.unshift(0); // 推入一个哨兵
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i]]) {
      swap(i, nums[i]);
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== i) {
      res.push(nums[i]);
    }
  }
  console.log({ res });

  return res;

  function swap(i, j) {
    let term = nums[i];
    nums[i] = nums[j];
    nums[j] = term;
  }
};
// @lc code=end

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
