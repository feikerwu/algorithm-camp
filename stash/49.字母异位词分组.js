/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }
  return Object.keys(map).map(key => map[key]);
};
// @lc code=end
