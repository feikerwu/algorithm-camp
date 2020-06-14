/*
 * @lc app=leetcode.cn id=1300 lang=javascript
 *
 * [1300] 转变数组后最接近目标值的数组和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  arr.sort((a, b) => a - b);
  let sum = 0,
    x = 0,
    len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    x = (target - sum) / (len - i);
    if (x < arr[i]) {
      return x - Math.floor(x) > 0.5 ? Math.ceil(x) : Math.floor(x);
    } else {
      sum += arr[i];
    }
  }
  return arr[len - 1];
};
// @lc code=end
