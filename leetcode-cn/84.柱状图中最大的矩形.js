/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * 单调栈解法
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = []
  let maxArea = 0
  heights = [0, ...heights, 0] // 前后哨兵
  stack.push(0)
  for(let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let top = stack.pop()
      maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[top], maxArea)
    }
    stack.push(i)
  }
  return maxArea
};
// @lc code=end
/**
 * 时间复杂度O(N*N)
 * @param {} heights
 */
var largestRectangleArea1 = function(heights) {
  let maxArea = 0
  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i]
    for(let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j])
      maxArea = Math.max(maxArea, minHeight * (j - i + 1))
    }
  }
  return maxArea
};