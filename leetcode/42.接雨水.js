/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = new Array();
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    // 如果当前比在栈中的柱子元素要高，则说明可以接到雨水
    while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
      const curHeight = height[stack[stack.length - 1]];
      stack.pop();

      if (stack.length === 0) {
        break;
      }

      // 计算栈顶柱子能接到的雨水数量

      const curStackTopHeight = height[stack[stack.length - 1]];
      result +=
        (Math.min(curStackTopHeight, height[i]) - curHeight) *
        (i - stack[stack.length - 1] - 1);
    }

    stack.push(i);
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// @lc code=end
