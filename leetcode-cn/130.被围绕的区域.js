/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let visited = Array.from(board, v => Array.from(v).fill(0));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        !visited[i][j] &&
        board[i][j] === 'O' &&
        (i === 0 ||
          j === 0 ||
          i === board.length - 1 ||
          j === board[i].length - 1)
      ) {
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O' && !visited[i][j]) {
        board[i][j] = 'X';
      }
    }
  }

  console.log(board);

  function bfs(x, y) {
    let queue = [[x, y]];
    let dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    while (queue.length) {
      let [cx, cy] = queue.shift();
      visited[cx][cy] = 1;
      for (let [dx, dy] of dirs) {
        let [nx, ny] = [cx + dx, cy + dy];
        if (isValid(nx, ny)) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
  }

  function isValid(x, y) {
    return (
      x >= 0 &&
      x < board.length &&
      y >= 0 &&
      y < board[0].length &&
      board[x][y] === 'O' &&
      visited[x][y] === 0
    );
  }
};

solve(testCase);
