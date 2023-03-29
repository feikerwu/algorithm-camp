/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0,
    y = 0;

  const actions = {
    L: () => (x = x - 1),
    R: () => (x = x + 1),
    U: () => (y = y + 1),
    D: () => (y = y - 1),
  };

  for (let char of moves) {
    actions[char]();
  }

  return x === 0 && y === 0;
};
// @lc code=end
