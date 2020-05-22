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
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) {
    return []
  }

  const res = []


  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      for (let k = 1; k <= 3; k++) {
        let term = [s.substring(0, i), s.substring(i, i + j), s.substring(i + j, i + j + k), s.substring(i + j + k)]
        if (isValid(term)) {
          res.push(term.join('.'))
        }
      }
    }
  }

  return res
};

function isValid(arr) {
  return arr.reduce((acc, cur) => {
    let curIpNum = parseInt(cur)
    return acc && (curIpNum <= 255) && (`${curIpNum}` === cur)
  }, true)

}

/**
 * 1. 实现方案，纯暴力
 */


// @lc code=end

