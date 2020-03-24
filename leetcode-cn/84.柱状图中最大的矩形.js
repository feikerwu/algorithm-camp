/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0
  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i]
    for(let j = i + 1; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j])
      maxArea = Math.max(maxArea, minHeight * (j - i + 1))
    }
  }
  return maxArea
};
// @lc code=end

