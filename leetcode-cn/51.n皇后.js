/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  let queen = Array.from({ length: n }).map((_) =>
    Array.from({ length: n }).fill('.')
  );

  dfs(0);

  return res;

  function dfs(cur) {
    if (cur === n) {
      res.push(clone(queen));
    }
    for (let i = 0; i < n; i++) {
      if (check(cur, i)) {
        queen[cur][i] = 'Q';
        dfs(cur + 1);
        queen[cur][i] = '.';
      }
    }
  }

  function check(x, y) {
    for (let i = 0; i < n; i++) {
      if (i !== x && queen[i][y] === 'Q') {
        return false;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i !== y && queen[x][i] === 'Q') {
        return false;
      }
    }

    let dirs = [
      [1, -1],
      [1, 1],
      [-1, 1],
      [-1, -1],
    ];

    for (let i = 0; i < dirs.length; i++) {
      let curX = x,
        curY = y;
      while (curX >= 0 && curX < n && curY >= 0 && curY < n) {
        [curX, curY] = [curX + dirs[i][0], curY + dirs[i][1]];
        if (
          curX >= 0 &&
          curX < n &&
          curY >= 0 &&
          curY < n &&
          queen[curX][curY] === 'Q'
        ) {
          return false;
        }
      }
    }

    return true;
  }
};

const clone = (arr) => arr.map((item) => item.slice().join(''));

// @lc code=end
