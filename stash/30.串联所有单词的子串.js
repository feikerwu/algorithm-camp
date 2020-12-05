/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const map = {};
  const res = [];
  const len = words[0]?.length || 0;
  for (let word of words) {
    map[word] = (map[word] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    const cache = { ...map };
    for (let j = 0; j < words.length; j++) {
      const curSub = s.substr(i + j * len, len);
      if (!cache[curSub]) {
        break;
      } else {
        cache[curSub]--;
        if (j === words.length - 1) {
          res.push(i);
        }
      }
    }
  }
  return res;
};
// @lc code=end
