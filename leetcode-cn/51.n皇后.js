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
  let queen = Array.from({ length: n }).map(_ =>
    Array.from({ length: n }).fill('.')
  );

  dfs(0);

  return res;

  function dfs(cur) {
    // 找到一个摆放的可能
    if (cur === n) {
      res.push(clone(queen));
    }

    // 在当前行遍历每列摆放的可能性
    for (let i = 0; i < n; i++) {
      if (check(cur, i)) {
        // 可以放，则在当前点摆放Q, 寻找下一个Q的摆放位置
        queen[cur][i] = 'Q';
        dfs(cur + 1);
        // 回溯
        queen[cur][i] = '.';
      }
    }
  }

  function check(x, y) {
    // 从上到下
    for (let i = 0; i < n; i++) {
      if (i !== x && queen[i][y] === 'Q') {
        return false;
      }
    }

    // 从左到右
    for (let i = 0; i < n; i++) {
      if (i !== y && queen[x][i] === 'Q') {
        return false;
      }
    }

    // 检查斜着的4个方向
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

const clone = arr => arr.map(item => item.slice().join(''));

// @lc code=end
