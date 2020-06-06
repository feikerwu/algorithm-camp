/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  let pre = [], cur = []
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        cur.push(1)
      } else {
        cur.push(pre[j] + pre[j-1])
      }
    }
    res.push(cur)
    pre = cur
    cur = []
  }
  return res
};
// @lc code=end

