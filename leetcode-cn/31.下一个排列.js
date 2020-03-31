/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let preIndex = nums.length - 1
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      preIndex = i - 1
      break
    }
  }
  // console.log({preIndex})
  if (preIndex === nums.length - 1) {
    return nums.reverse()
  }

  for(let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[preIndex]) {
      swap(nums, i, preIndex)
      break
    }
  }
  let start = preIndex + 1
  let end = nums.length - 1
  while(start <= end) {
    swap(nums, start, end)
    start++
    end--
  }

  return nums
};

function swap(nums, a, b) {
  let term = nums[a]
  nums[a] = nums[b]
  nums[b] = term
}
// @lc code=end

nextPermutation([1,3,2])