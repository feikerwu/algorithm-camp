/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // return [0, 0]

  const m = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) {
      return [m.get(target - nums[i]), i]
    }
    m.set(nums[i], i)
  }
  return [0, 0]
};
// @lc code=end

