/**
 * 第K轮到当前节点的数量 = 第K-1到当前节点前置节点的数量之和
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let dp = Array.from({ length: k + 1 }).map(_ =>
    Array.from({ length: n }).fill(0)
  );

  dp[0][0] = 1;

  for (let i = 1; i <= k; i++) {
    for (let [start, end] of relation) {
      dp[i][end] = dp[i][end] + dp[i - 1][start];
    }
  }

  return dp[k][n - 1];
};

let n = 3,
  relation = [
    [0, 2],
    [2, 1],
  ],
  k = 2;

numWays(n, relation, k);
