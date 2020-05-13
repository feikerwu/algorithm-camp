/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  const ROW = 8
  const COL = 8
  const dx = [0, 1, 0, -1] // 顺时针方向
  const dy = [1, 0, -1, 0]
  let res = 0

  for (let i = 0; i < COL; i++) {
    for (let j = 0; j < ROW; j++) {
      if (board[i][j] === 'R') {
        for (let k = 0; k < 4; k++) {
          let [x, y] = [i + dx[k], j + dy[k]]
          while(x >= 0 && y >= 0 && x < COL && y < ROW) {
            if (board[x][y] === '.') {
              x = x + dx[k]
              y = y + dy[k]
            } else if (board[x][y] === 'p') {
              res++

              break
            } else if (board[x][y] === 'B') {
              break
            }
          }
        }
        return res
      }
    }
  }
};

numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]])
// @lc code=end

