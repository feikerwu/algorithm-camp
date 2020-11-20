/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counts = {};
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }
  let pairs = Object.keys(counts).map(key => [counts[key], key]);
  console.log(pairs);
  select(0, pairs.length - 1, k);
  console.log(pairs);
  return pairs.slice(0, k).map(item => item[1]);

  function select(left, right, offset) {
    if (left <= right) {
      return;
    }
    const pivotIndex = partition(0, pairs.length - 1);
    if (pivotIndex === offset) {
      return;
    }

    console.log(pairs);

    if (pivotIndex < offset) {
      select(pivotIndex + 1, right, offset);
    } else {
      select(left, pivotIndex - 1);
    }
  }

  function partition(left, right) {
    const [pivot] = pairs[right];
    let cur = left;
    let leftPartIndex = left;
    console.log(pivot);
    while (cur < right) {
      if (pairs[cur][0] < pivot) {
        swap(leftPartIndex, cur);
      }
    }
    swap(right, leftPartIndex);
    return leftPartIndex;
  }

  function swap(x, y) {
    const term = pairs[x];
    pairs[x] = pairs[y];
    pairs[y] = term;
  }
};
// @lc code=end

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
