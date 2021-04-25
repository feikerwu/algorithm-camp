/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let pre = 0;
  let map = {};
  for (let i = 0; i < p.length; i++) {
    if (
      i !== 0 &&
      (p[i].charCodeAt() - p[i - 1].charCodeAt() === 1 ||
        p[i].charCodeAt() - p[i - 1].charCodeAt() === -25)
    ) {
      pre += 1;
    } else {
      pre = 1;
    }
    map[p[i]] = Math.max(map[p[i]] || 0, pre);
  }
  return Object.values().reduce((acc, cur) => acc + cur, 0);
};
// @lc code=end
