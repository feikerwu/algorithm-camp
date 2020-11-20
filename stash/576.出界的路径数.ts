/*
 * @lc app=leetcode.cn id=576 lang=typescript
 *
 * [576] 出界的路径数
 */

// @lc code=start
// function findPaths(
//   m: number,
//   n: number,
//   N: number,
//   i: number,
//   j: number
// ): number {
//   const MOD = Math.pow(10, 9) + 7;
//   if (i < 0 || j < 0 || i >= m || j >= n) {
//     return 1;
//   }
//   if (N <= 0) {
//     return 0;
//   }
//   const cur =
//     (findPaths(m, n, N - 1, i + 1, j) +
//       findPaths(m, n, N - 1, i - 1, j) +
//       findPaths(m, n, N - 1, i, j + 1) +
//       findPaths(m, n, N - 1, i, j - 1)) %
//     MOD;

//   return cur;
// }

function findPaths(
  m: number,
  n: number,
  N: number,
  i: number,
  j: number
): number {
  const MOD = Math.pow(10, 9) + 7;
  let res = 0;
  let dp = Array.from({ length: m + 2 }).map(_ =>
    Array.from({ length: n + 2 }).map(_ =>
      Array.from({ length: N + 2 }).fill(0)
    )
  ) as Array<Array<Array<number>>>;

  for (let i = 0; i <= m + 1; i++) {
    for (let j = 0; j <= n + 1; j++) {
      if (i === 0 || j === 0 || i === m + 1 || j === n + 1) {
        dp[i][j][0] = 1;
      }
    }
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j][k] =
          (dp[i - 1][j][k - 1] +
            dp[i + 1][j][k - 1] +
            dp[i][j - 1][k - 1] +
            dp[i][j + 1][k - 1]) %
          MOD;
      }
    }
  }

  for (let k = 1; k <= N; k++) {
    res += dp[i + 1][j + 1][k] % MOD;
  }
  return res % MOD;
}
// @lc code=end
