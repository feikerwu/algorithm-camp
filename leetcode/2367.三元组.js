/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let set = new Set(nums),
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i] + diff,
      y = x + diff;

    if (set.has(x) && set.has(y)) {
      count++;
    }
  }

  return count;
};
