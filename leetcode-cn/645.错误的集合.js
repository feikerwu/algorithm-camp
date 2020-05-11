/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const term = nums.slice();
  for (let i = 0; i < nums.length; i++) {
    term.push(i + 1);
  }
  let res = term.reduce((acc, cur) => acc ^ cur, 0);
  let resCopy = res;
  let sign = 1;
  while (!(sign & res)) {
    sign = sign << 1;
  }
  for (let i = 0; i < term.length; i++) {
    if (term[i] & sign) {
      res = res ^ term[i];
    }
  }
  return nums.indexOf(res) === -1 ? [res ^ resCopy, res] : [res, res ^ resCopy];
};
// @lc code=end
