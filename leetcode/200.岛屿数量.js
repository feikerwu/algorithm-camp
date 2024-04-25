/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * 使用dfs来做联通分量的实现
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const cols = grid.length,
    rows = grid.length ? grid[0].length : 0;

  const signals = Array.from({ length: cols }).map(_ =>
    Array.from({ length: rows }).fill(0)
  );

  let result = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (signals[i][j] === 0 && grid[i][j] === '1') {
        dfs(i, j);
        result++;
      }
    }
  }

  function dfs(x, y) {
    if (
      x >= 0 &&
      x < cols &&
      y >= 0 &&
      y < rows &&
      grid[x][y] === '1' &&
      signals[x][y] === 0
    ) {
      signals[x][y] = 1;

      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
    }
  }

  return result;
};

// @lc code=end
