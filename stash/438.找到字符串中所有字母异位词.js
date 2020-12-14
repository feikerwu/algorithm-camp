/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  let map = {};
  for (let char of p) {
    map[char] = (map[char] || 0) + 1;
  }

  let fast = 0,
    slow = 0;
  let termMap = { ...map };
  while (fast < s.length) {
    if (termMap[s[fast]] === undefined) {
      slow = fast = fast + 1;
      termMap = { ...map };
    } else {
      if (termMap[s[fast]] <= 0) {
        termMap[s[slow]]++;
        slow++;
      } else {
        termMap[s[fast]]--;
        fast++;
      }
      if (isOK(termMap)) {
        res.push(slow);
      }
    }
  }
  // console.log({ res });
  return res;
};

function isOK(map) {
  return Object.keys(map).reduce((acc, cur) => acc && map[cur] === 0, true);
}
// @lc code=end

findAnagrams('cbaebabacd', 'abc');
