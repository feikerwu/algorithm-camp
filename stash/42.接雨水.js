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
  let res = 0;
  const stack = [];
  for (let i = 0; i < height.length; i++) {
    if (stack.length === 0 || height[i] < height[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (stack.length && height[i] >= height[stack[stack.length - 1]]) {
        let pre = stack.pop();
        if (stack.length === 0) {
          break;
        }
        const dis = i - stack[stack.length - 1] - 1;
        const h =
          Math.min(height[i], height[stack[stack.length - 1]]) - height[pre];

        res += dis * h;
      }
      stack.push(i);
    }
  }
  console.log(res);
  return res;
};
// @lc code=end
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
