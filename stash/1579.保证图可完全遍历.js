/*
 * @lc app=leetcode.cn id=1579 lang=javascript
 *
 * [1579] 保证图可完全遍历
 */

class UF {
  constructor(n) {
    this.father = Array.from({ length: n }).map((v, i) => i);
    this.ranks = Array.from({ length: n }).fill(1);
    this.count = n;
  }

  find(x) {
    const { father } = this;
    if (father[x] === x) {
      return father[x];
    }
    return (father[x] = this.find(father[x]));
  }

  union(x, y) {
    const { father, ranks } = this;
    let [rx, ry] = [this.find(x), this.find(y)];
    if (rx === ry) {
      return false;
    }
    if (ranks[ry] < ranks[rx]) {
      [rx, ry] = [ry, rx];
    }
    father[ry] = rx;
    ranks[rx] += ranks[ry];
    this.count = this.count - 1;
    return true;
  }
}

/**
 * 换个角度，删去最多的边可以转化为用最少的边构成联通图，由于存在3种边，需要考虑挑选优先级
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  const [ua, ub] = [new UF(n), new UF(n)];
  let count = 0;
  for (let [type, from, to] of edges) {
    if (type === 3) {
      if (ua.union(from - 1, to - 1)) {
        ub.union(from - 1, to - 1);
        count++;
      }
    }
  }

  for (let [type, from, to] of edges) {
    if (type === 1) {
      count += +ua.union(from - 1, to - 1);
    }
    if (type === 2) {
      count += +ub.union(from - 1, to - 1);
    }
  }

  if (ua.count !== 1 || ub.count !== 1) {
    return -1;
  }
  return edges.length - count;
};
// @lc code=end

maxNumEdgesToRemove(4, [
  [3, 1, 2],
  [3, 2, 3],
  [1, 1, 3],
  [1, 2, 4],
  [1, 1, 2],
  [2, 3, 4],
]);
