/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * 贪心算法：
 * 从 A 里挑身高最高的人 x 出来，
 * 插入到 B. 因为 B 中每个人的身高都比 x 要高，
 * 因此 x 插入的位置，就是看 x 前面应该有多少人就行了。
 * 比如 x 前面有 5 个人，那 x 就插入到队列 B 的第 5 个位置。
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

