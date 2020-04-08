/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = []
  const path = []
  backTrack(s, 0, s.length, path, res)
  return res
};

function backTrack(s, start, len, path, res) {
  if (start === len) {
    res.push(path.concat())
    return
  }

  for (let i = start; i < len; i++) {
    if (!isPalindrome(s, start, i)) {
      continue
    }
    path.push(s.substring(start, i + 1))
    backTrack(s, i + 1, len, path, res)
    path.pop()
  }
}

function isPalindrome(s, start, end) {
  while(start < end) {
    if (s[start++] !== s[end--]) {
      return false
    }
  }
  return true
}
// @lc code=end

