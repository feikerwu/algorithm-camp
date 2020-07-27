/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let start,
    target = 0,
    res = 0;
  // 找到初始节点，以及要走过的路径长度
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        start = [i, j];
      }
      if (grid[i][j] === 2) {
        end = [i, j];
      }
      if (grid[i][j] === 0) {
        target++;
      }
    }
  }

  // 逆时针4个方向
  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // 深搜
  walk(start[0], start[1]);

  function walk(x, y) {
    for (let [dx, dy] of dirs) {
      let [nx, ny] = [x + dx, y + dy];
      if (isOK(nx, ny)) {
        // 判断下个节点坐标是否溢出
        if (grid[nx][ny] === 0) {
          // 如果是合法节点，继续深搜
          grid[nx][ny] = 1;
          target--;
          walk(nx, ny);
          // 回溯
          grid[nx][ny] = 0;
          target++;
        } else if (grid[nx][ny] === 2 && target === 0) {
          // 如果到达目的地节点，且走过所有合法节点
          res++;
        }
      }
    }
  }

  function isOK(x, y) {
    return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
  }

  return res;
};

uniquePathsIII([
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
]);
