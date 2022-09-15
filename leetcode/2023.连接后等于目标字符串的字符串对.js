/*
 * @lc app=leetcode.cn id=2023 lang=javascript
 *
 * [2023] 连接后等于目标字符串的字符串对
 */

// @lc code=start
/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  const len = target.length;
  nums = nums.filter(num => num.length < len);

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j || nums[i].length + nums[j].length !== len) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        result++;
      }
    }
  }

  return result;
};

numOfPairs(['777', '7', '77', '77'], '7777');
// @lc code=end
