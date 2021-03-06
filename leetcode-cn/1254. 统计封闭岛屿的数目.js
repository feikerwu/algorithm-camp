/**
 * 常规解法:
 * 1. 如果当前节点是岛屿，那么它可能是隔离，也可能不是被水域包围
 * 2. 用一个全局变量标示隔离情况，用DFS/BFS,从当前点上下左右搜索，如果有遇到边界情况，将其标记为非隔离
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland1 = function (grid) {
  let maybe = 1;
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        maybe = 1;
        dfs(i, j);
        res += maybe;
      }
    }
  }
  console.log({ res });

  return res;

  function dfs(i, j) {
    let dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    if (
      i === 0 ||
      j === 0 ||
      i === grid.length - 1 ||
      j === grid[0].length - 1
    ) {
      maybe = 0;
    }

    grid[i][j] = 1;

    for (let [dx, dy] of dirs) {
      let [x, y] = [dx + i, dy + j];
      if (isValid(x, y)) {
        dfs(x, y);
      }
    }
  }

  function isValid(x, y) {
    return (
      x >= 0 &&
      y >= 0 &&
      x < grid.length &&
      y < grid[0].length &&
      grid[x][y] === 0
    );
  }
};

function closedIsland(grid) {
  for (let i = 0; i < grid.length; i++) {
    dfs(i, 0);
    dfs(i, grid[0].length - 1);
    // dfs(grid[0].length - 1, i);
  }
  for (let i = 0; i < grid[0].length; i++) {
    dfs(0, i);
    dfs(grid.length - 1, i);
  }

  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        dfs(i, j);
        res++;
      }
    }
  }
  return res;

  function dfs(i, j) {
    if (!isValid(i, j)) {
      return;
    }
    grid[i][j] = 1;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  function isValid(i, j) {
    return (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[0].length &&
      grid[i][j] === 0
    );
  }
}

let test = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
];
closedIsland(test);
