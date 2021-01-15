/**
 * 找到移除最多的同行或同列石头可以转换为找到能够留存最少的石头数量，或者说是找联通分量的数量, 同一个节点位置上的行列构成一条边, 用BFS/DFS/并查集都可以解。
 * 这里尝试用并查集解，每个石头节点上的行/列构成一条边，并对边 [x, y] 进行并查，这里通过对 y + 10000 区分 x/y
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let count = 0;
  const father = {};

  const find = x => {
    if (father[x] == undefined) {
      father[x] = x;
      count++;
    }
    if (father[x] !== x) {
      father[x] = find(father[x]);
    }
    return father[x];
  };

  const union = (x, y) => {
    const [px, py] = [find(x), find(y)];
    if (px !== py) {
      father[px] = [y];
      count--;
    }
  };

  let total = 0;
  for (let [x, y] of stones) {
    total++;
    union(x + 10000, y);
  }

  return total - count;
};
