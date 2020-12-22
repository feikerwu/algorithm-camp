/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  let nums = [];
  while (N) {
    nums.unshift(N % 10);
    N = ~~(N / 10);
  }
  let flag = true;
  while (flag) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        nums[i] = nums[i] - 1;
        while (++i < nums.length) {
          nums[i] = 9;
        }
      } else if (i === nums.length - 2) {
        flag = false;
      }
    }
  }
  return parseInt(nums.join(''));
};
// @lc code=end
