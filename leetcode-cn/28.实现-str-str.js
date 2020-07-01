/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

function strStr(text, pattern) {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let count = 0;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] === pattern[j]) {
        count++;
      } else {
        break;
      }
    }
    if (count === pattern.length) {
      return i;
    }
  }
  return -1;
}

// @lc code=end
strStr('hello', 'll');
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  const next = getNext(needle);
  let i = 0,
    j = 0;
  while (i < haystack.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) {
        return i - j;
      }
    } else {
      j = next[j];
    }
  }
  return -1;
};

/**
 * 获取next数组, next[i] 表示当 P[i] 失配时，P[0:i-1]的最大公共前缀后缀长度，注意是长度
 * @param {string} str 输入的字符串
 */
function getNext(str) {
  let next = Array.from(str).fill(0);
  let i = -1,
    j = 0;
  next[0] = -1;
  while (j < str.length) {
    if (i === -1 || str[i] === str[j]) {
      i++;
      j++;
      next[j] = i; // 这里的i含义是指长度
    } else {
      i = next[i];
    }
  }
  return next;
}
