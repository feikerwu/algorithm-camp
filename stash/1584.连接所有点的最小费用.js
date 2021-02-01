/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
/**
 * 1. 生成所有的边
 * 2. 对边根据权重排序
 * 3. 每次选取边权重最小且连接两个联通分量的边，将其加入到一张图内, 通过并查集确定是否是联通分量
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const len = points.length;
  const father = Array.from({ length: len }).map((v, i) => i);
  const find = x => (father[x] === x ? x : (father[x] = find(father[x])));
  const union = (x, y) => {
    const [rx, ry] = [find(x), find(y)];
    if (rx !== ry) {
      father[rx] = ry;
    }
    return rx !== ry;
  };
  const distance = (i, j) =>
    Math.abs(points[i][0] - points[j][0]) +
    Math.abs(points[i][1] - points[j][1]);

  let allEdges = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      allEdges.push({ x: i, y: j, dist: distance(i, j) });
    }
  }
  allEdges.sort((a, b) => a.dist - b.dist);
  let res = 0;
  for (let edge of allEdges) {
    const { x, y, dist } = edge;
    if (union(x, y)) {
      // console.log(x, y);
      res += dist;
    }
  }
  return res;
};

// @lc code=end
