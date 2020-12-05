/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  s = '#' + s
  const set = new Set(['#'])
  for (let i = 1, j = 1; i < s.length; i++) {
    set.delete(s[i - 1])
    while (j < s.length && !set.has(s[j])) {
      set.add(s[j])
      res = Math.max(res, j - i + 1)
      j++
    }
  }
  return res
};
// @lc code=end

