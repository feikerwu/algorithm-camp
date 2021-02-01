/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const map = new Map();
  let res = 0;
  for (let [x, y] of dominoes) {
    if (x > y) {
      [x, y] = [y, x];
    }
    const val = x * 10 + y;
    if (map.has(val)) {
      res += map.get(val);
    }
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  }
  return res;
};
// @lc code=end

numEquivDominoPairs([
  [2, 2],
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [1, 1],
  [2, 2],
]);
