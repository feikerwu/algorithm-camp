/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let aMap = {};
  let bMap = {};
  let strs = s.split(' ');
  for (let i = 0; i < pattern.length; i++) {
    let p = pattern[i];
    let str = strs[i];
    if (!aMap[p] && !bMap[str]) {
      aMap[p] = str;
      bMap[str] = p;
    } else if (aMap[p] !== str || bMap[str] !== p) {
      return false;
    }
  }
  return strs.length === pattern.length;
};
// @lc code=end
