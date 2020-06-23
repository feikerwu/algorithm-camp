/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let m = Array.from({ length: n }).map((item) =>
    Array.from({ length: n }).fill(0)
  );
  let res = 0;
  dfs(0);
  return res;

  function dfs(cur) {
    if (cur === n) {
      res++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (check(cur, i)) {
        m[cur][i] = 1;
        dfs(cur + 1);
        m[cur][i] = 0;
      }
    }
  }

  function check(x, y) {
    let dirs = [
      // 顺时针8个方向
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
    ];

    for (let [dx, dy] of dirs) {
      let cx = x,
        cy = y;

      while (cx < n && cx >= 0 && cy < n && cy >= 0) {
        if (m[cx][cy]) {
          return false;
        } else {
          cx += dx;
          cy += dy;
        }
      }
    }
    return true;
  }
};
// @lc code=end
