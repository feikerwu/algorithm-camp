/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return nums[len - 1] * nums[len - 2] * nums[len - 3];
  }
  let [nc, pc, zc] = [0, 0, 0];
  for (let num of nums) {
    if (num === 0) {
      zc++;
    }
  }
};
