/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * DFS
 * @param {number[][]} M
 * @return {number}
 */
// var findCircleNum = function (M) {
//   const visited = Array.from({ length: M.length }).fill(0);
//   let res = 0;
//   for (let i = 0; i < visited.length; i++) {
//     if (!visited[i]) {
//       visited[i] = 1;
//       dfs(i);
//       res++;
//     }
//   }
//   return res;

//   function dfs(i) {
//     for (let j = 0; j < M.length; j++) {
//       if (i !== j && !visited[j] && M[i][j]) {
//         visited[j] = 1;
//         dfs(j);
//       }
//     }
//   }
// };

// BFS
var findCircleNum = function (M) {
  const visited = Array(M.length).fill(0);
  let res = 0;
  const queue = [];
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      res++;
      queue.push(i);
    }

    while (queue.length) {
      const cur = queue.shift();
      for (let j = 0; j < M.length; j++) {
        if (cur !== j && M[cur][j] && !visited[j]) {
          queue.push(j);
          visited[j] = 1;
        }
      }
    }
  }
  return res;
};
// @lc code=end
