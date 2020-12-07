/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  let point = 0,
    originalK = k;
  while (point < num.length) {
    while (stack.length && k && stack[stack.length - 1] > num[point]) {
      stack.pop();
      k--;
    }
    stack.push(num[point++]);
  }
  let res = stack
    .slice(0, num.length - originalK)
    .join('')
    .replace(/^0*/, '');
  return res === '' ? '0' : res;
};
// @lc code=end
