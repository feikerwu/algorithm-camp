/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let countNum = Array.from(nums).fill(null)
  let count0 = 0,
    count1 = 0
  for (let i = 0; i < nums.length; i++) {
    nums[i] == 0 ? count0++ : count1++
    countNum[i] = [count0, count1]
  }
  console.log(countNum)

  let maxLength = -Infinity
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let ranges = [
        countNum[j][0] - countNum[i][0],
        countNum[j][1] - countNum[i][1],
      ]
      if (ranges[0] === ranges[1]) {
        maxLength = Math.max(maxLength, ranges[0])
      }
    }
  }
  return maxLength
}
// @lc code=end
