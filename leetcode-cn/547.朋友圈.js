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
// var findCircleNum = function (M) {
//   const visited = Array(M.length).fill(0);
//   let res = 0;
//   const queue = [];
//   for (let i = 0; i < M.length; i++) {
//     if (!visited[i]) {
//       visited[i] = 1;
//       res++;
//       queue.push(i);
//     }

//     while (queue.length) {
//       const cur = queue.shift();
//       for (let j = 0; j < M.length; j++) {
//         if (cur !== j && M[cur][j] && !visited[j]) {
//           queue.push(j);
//           visited[j] = 1;
//         }
//       }
//     }
//   }
//   return res;
// };

var findCircleNum = function (M) {
  let count = M.length;
  let parnets = Array.from(M).map((item, index) => index);
  function find(x) {
    if (parnets[x] === x) {
      return x;
    }
    return (parnets[x] = find(parnets[x]));
  }

  function union(x, y) {
    if (find(x) === find(y)) {
      return;
    }
    parnets[parnets[x]] = parnets[y];
    count--;
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M[i].length; j++) {
      if (M[i][j]) {
        union(i, j);
      }
    }
  }

  return count;
};
// @lc code=end
