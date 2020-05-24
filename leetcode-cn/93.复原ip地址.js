/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) {
    return []
  }
  const res = []
  const term = []
  dfs(s, 0, term, res)

  return res
}

function dfs(s, start, term, res) {
  if (term.length === 4) {
    // console.log(term)
    if (start === s.length) {
      res.push(term.join('.'))
    }
    return
  }

  for (let i = 1; i <= 3 && start + i <= s.length; i++) {
    let sub = s.substring(start, start + i)
    if (isValid(sub)) {
      term.push(sub)
      dfs(s, start + i, term, res)
      term.pop()
    }
  }
}

function isValid(str) {
  const num = parseInt(str)
  return num <= 255 && `${num}` === str
}

/**
 * 1. 实现方案，纯暴力
 */

// @lc code=end
