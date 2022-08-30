/*
 * @lc app=leetcode.cn id=1338 lang=javascript
 *
 * [1338] 数组大小减半
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let map = {},
    length = arr.length;

  for (let val of arr) {
    map[val] = (map[val] || 0) + 1;
  }

  const sorted = Object.keys(map)
    .map(key => ({ value: +key, count: map[key] }))
    .sort((a, b) => b.count - a.count);

  let result = 0,
    total = 0,
    i = 0;

  while (total < length / 2) {
    total += sorted[i].count;
    result += 1;
    i++;
  }

  return result;
};
// @lc code=end
