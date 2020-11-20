/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const counts = {};
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return nums.sort((a, b) => counts[a] - counts[b]).slice(0, k);
}
// @lc code=end
