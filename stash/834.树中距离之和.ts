/*
 * @lc app=leetcode.cn id=834 lang=typescript
 *
 * [834] 树中距离之和
 */

// @lc code=start
function sumOfDistancesInTree(N: number, edges: number[][]): number[] {
  let g = Array.from({ length: N }).map(_ =>
    Array.from({ length: N }).fill(Infinity)
  ) as Array<Array<number>>;

  for (let [start, end] of edges) {
    g[start][end] = g[end][start] = 1;
  }
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (
          g[i][k] !== Infinity &&
          g[k][j] !== Infinity &&
          g[i][j] > g[i][k] + g[k][j]
        ) {
          g[i][j] = g[j][i] = g[i][k] + g[k][j];
        }
      }
    }
  }

  const res = Array.from({ length: N }).fill(0) as Array<number>;
  for (let i = 0; i < N; i++) {
    let cur = 0;
    for (let j = 0; j < N; j++) {
      if (i != j) {
        cur += g[i][j];
      }
    }
    res[i] = cur;
  }
  return res;
}
// @lc code=end
