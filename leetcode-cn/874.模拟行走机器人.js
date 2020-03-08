/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  // 初始位置
  let [x, y] = [0, 0]

  // 4个方向，0-4分别指北，西， 男， 东（逆时针方向）
  let dirs = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0]
  ]

  // 用一个set存储障碍点，将每次查询从O(n)降低到O(1)
  let set = new Set(obstacles.map(item => item.join('')))

  let curDir = 0
  let res = 0;
  while(commands.length) {
    let cur = commands.shift()
    if (cur < 0) {
      curDir += (cur === -2 ? 1 : -1)
      curDir = (curDir + 4) % 4
    } else {
      let [dx, dy] = dirs[curDir]
      console.log(cur)
      for(let i = 0; i < cur; i++) {
        let curPos = [x + dx, y + dy]
        if (!set.has(curPos.join(''))) {
          res = Math.max(res, curPos[0] * curPos[0] + curPos[1] * curPos[1])
          x = curPos[0]
          y = curPos[1]
        }
      }
      console.log({x, y})
    }
  }
  return res;
};

// robotSim([4,-1,4,-2,4], [[2,4]])
// @lc code=end

