/*
 * @lc app=leetcode.cn id=1347 lang=javascript
 *
 * [1347] 制造字母异位词的最小步骤数
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  console.log({ s, t });
  let len = s.length;
  let count = 0;
  let i = 0,
    j = 0;

  while (i < len && j < len) {
    if (s[i] === t[j]) {
      count++;
      i++;
      j++;
    } else if (s[i] > t[j]) {
      j++;
    } else {
      i++;
    }
  }

  return len - count;
};
// @lc code=end

console.log(minSteps('leetcode', 'practice'));
