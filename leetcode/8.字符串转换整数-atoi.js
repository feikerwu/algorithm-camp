/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const min = Math.pow(2, 31) * -1;
const max = Math.pow(2, 31) - 1;

var myAtoi = function (s) {
  s = s.trim();

  const negative = s[0] === '-' ? -1 : 1;

  if (s[0] === '-' || s[0] === '+') {
    s = s.substring(1);
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (!/\d/.test(s[i])) {
      break;
    }

    if (result === 0) {
      result = result + Number(s[i]);
    } else {
      result = result * 10 + Number(s[i]);
    }
  }

  result = result * negative;

  return result < min ? min : result > max ? max : result;
};
// @lc code=end
