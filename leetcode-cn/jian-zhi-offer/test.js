var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        let flag = dfs(board, i, j, word, 1, {});
        if (flag) {
          return true;
        }
      }
    }
  }
  return false;
};

function dfs(board, x, y, word, cur, visited) {
  if (cur === word.length) {
    return true;
  }
  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (let dir of dirs) {
  }
}
