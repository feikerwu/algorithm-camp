/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  for (let i = 0; i < grid[0].length; i++) {
    dfs(grid, 0, i)
    dfs(grid, grid.length - 1, i)
  }
  for (let i = 0; i < grid.length; i++) {
    dfs(grid, i, 0)
    dfs(grid, i, grid[0].length - 1)
  }
  let res = 0
  console.log(grid)
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res;
};

function dfs(grid, x, y) {
  if (!isValid(grid, x, y) || grid[x][y] !== 0) {
    return
  }

  grid[x][y] = 1;
  dfs(grid, x - 1, y)
  dfs(grid, x + 1, y)
  dfs(grid, x, y - 1)
  dfs(grid, x, y + 1)
}

function isValid(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length
}
// @lc code=end

let grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
closedIsland(grid)