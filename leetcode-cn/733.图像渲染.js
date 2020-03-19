/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let oldColor = image[sr][sc]
  if (oldColor === newColor) {
    return image
  }
  // 上下左右
  const pairs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  dfs(sr, sc)
  return image;

  // 坐标是否合法
  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < image.length && y < image[0].length
  }

  function dfs( x, y) {
    if (image[x][y] !== oldColor) {
      return
    }
    image[x][y] = newColor
    for(let i = 0; i < pairs.length; i++) {
      const [newX, newY] = [x + pairs[i][0], y + pairs[i][1]]
      if (isValid(newX, newY)) {
        dfs(newX, newY)
      }
    }
  }
};


// @lc code=end

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))

