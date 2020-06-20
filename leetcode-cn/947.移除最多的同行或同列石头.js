/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
const MAX_STONES = 10000;
var removeStones = function (stones) {
  // 并查集，将行列相并，并的关系是stone的行列信息
  let unionSet = Array.from({ length: MAX_STONES * 2 }).fill(0);
  for (let i = 0; i < stones.length; i++) {
    let stone = stones[i];
    let [x, y] = stone;
    unionSet[x] = x;
    unionSet[y + MAX_STONES] = y + MAX_STONES;
  }

  for (let i = 0; i < stones.length; i++) {
    union(stones[i][0], stones[i][1] + MAX_STONES);
  }

  let set = new Set();

  for (let i = 0; i < unionSet.length; i++) {
    if (unionSet[i] !== 0) {
      set.add(find(i));
    }
  }

  return stones.length - set.size;

  function union(x, y) {
    if (find(x) !== find(y)) {
      unionSet[find(x)] = find(y);
    }
  }

  function find(x) {
    if (unionSet[x] !== x) {
      unionSet[x] = find(unionSet[x]);
    }
    return unionSet[x];
  }
};
// @lc code=end
removeStones([
  [4, 5],
  [0, 4],
  [0, 5],
  [4, 3],
  [2, 2],
  [5, 1],
  [0, 3],
  [2, 4],
  [4, 0],
]);
