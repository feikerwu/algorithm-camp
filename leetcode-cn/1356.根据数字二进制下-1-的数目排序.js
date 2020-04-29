/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  return arr.sort((a, b) => {
    let [countA, countB] = [countNum(a), countNum(b)]
    if (countA === countB) {
      return a - b
    }
    return countA - countB
  })
};

// 计算数字中1出现的次数
const countNum = num => {
  let count = 0;
  while(num) {
    if (num % 2 === 1) {
      count++
    }
    num = num >> 1
  }
  return count
}
// @lc code=end

