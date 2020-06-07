/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const res = []
  let i = 0;
  while(i < n) {
    res.push(nums[i])
    res.push(nums[n + i])
    i++
  }

  return res
};