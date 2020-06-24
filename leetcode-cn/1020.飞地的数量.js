/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function (A) {
  let visited = Array.from(A).map((item) => Array.from(A).fill(0));
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1 && !visited[i][j]) {
        count += bfs(i, j);
      }
    }
  }
  console.log({ count });
  return count;

  function bfs(i, j) {
    let flag = 1,
      count = 0;
    let dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    let queue = [[i, j]];
    while (queue.length) {
      let [x, y] = queue.pop();

      count++;
      if (isEdge(x, y)) {
        flag = 0;
      }
      visited[x][y] = 1;
      for (let [dx, dy] of dirs) {
        let [xx, yy] = [x + dx, y + dy];

        if (isValid(xx, yy) && !visited[xx][yy] && A[xx][yy] === 1) {
          queue.push([xx, yy]);
        }
      }
    }

    return flag ? count : 0;
  }

  function isEdge(x, y) {
    return x === 0 || y === 0;
  }

  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < A.length && y < A[0].length;
  }
};
// @lc code=end
numEnclaves([
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
]);
