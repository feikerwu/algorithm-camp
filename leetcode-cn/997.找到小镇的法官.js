/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let degree = new Array(N + 1).fill(0)
  for (let [a, b] of trust) {
    degree[a]--;
    degree[b]++;
  }
  for (let i = 1; i < degree.length; i++) {
    if (degree[i] === N - 1) {
      return i
    }
  }
  return -1
};
// findJudge(3, [[1,3],[2,3],[3,1]])
// @lc code=end

