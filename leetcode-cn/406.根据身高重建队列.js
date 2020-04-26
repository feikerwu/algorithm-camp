/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people = people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })
  const res = new Array()
  for (let cur of people) {
    res.splice(cur[1], 0, cur)
  }
  return res
};
// @lc code=end

