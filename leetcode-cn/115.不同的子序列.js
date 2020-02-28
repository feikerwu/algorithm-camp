/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let res = new Array()
  for (let i = 0; i <= t.length; i++) {
    let tem = new Array(s.length + 1).fill(0)
    res.push(tem.slice())
  }

  for(let i = 0; i <= s.length; i++) {
    res[0][i] = 1
  }

  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      res[i][j] += res[i][j-1]
      if (t[i-1] === s[j-1]) {
        res[i][j] += res[i-1][j-1]
      }
    }
  }
  return res[t.length][s.length]
};
// @lc code=end

