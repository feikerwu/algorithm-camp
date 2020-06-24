/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let nums = Array.from({ length: n }).fill(0);
  nums[0] = '1';
  for (let i = 1; i < n; i++) {
    let pre = nums[i - 1];
    let cur = '';
    for (let j = 0; j < pre.length; ) {
      let count = 1;
      let k = j + 1;
      while (pre[k] === pre[j] && k < pre.length) {
        k++;
        count++;
      }
      cur = `${cur}${count}${pre[j]}`;
      j = k;
    }
    nums[i] = cur;
  }
  console.log({ nums });

  return nums[n - 1];
};
// @lc code=end
countAndSay(5);
