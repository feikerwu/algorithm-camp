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
  const map = {};
  let result = 0,
    start = 0,
    end = 0;

  while (start < s.length && end < s.length) {
    const endChar = s[end];

    if (map[endChar] !== undefined && map[endChar] >= start) {
      result = Math.max(result, end - map[endChar]);
      start = map[endChar] + 1;
      map[endChar] = end;
    } else {
      console.log({ start, end });
      result = Math.max(result, end - start + 1);
      map[endChar] = end;
    }

    end++;
  }

  return result;
};

lengthOfLongestSubstring('abcabcbb');
// @lc code=end
