/*
 * @lc app=leetcode.cn id=928 lang=javascript
 *
 * [928] 尽量减少恶意软件的传播 II
 */

// @lc code=start
/**
 * 1. 计算联通分量
 * 2. 将在同一个联通分量中的初始节点剔除
 * 3. 计算导致联通分量最大的节点
 * 4. 找到下标最小的节点
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {
  const N = graph.length;
  let colors = Array.from({ length: N }).fill(0);
  let curColor = 1;
  // 给联通分量标色
  for (let i = 0; i < N; i++) {
    if (colors[curColor] === 0) {
      dfs(i, curColor++);
    }
  }

  let counts = Array.from({ length: curColor }).fill(0);
  for (node of initial) {
    counts[colors[node]]++;
  }

  let maybe = [];
  for (node of initial) {
    if (counts[colors[node]] === 1) {
      maybe.push(node);
    }
  }

  counts.fill(0);

  for (let i = 0; i < N; i++) {
    counts[colors[i]]++;
  }

  let res = -1;
  let maxCount = -1;

  for (let node of maybe) {
    if (counts[colors[node]] > maxCount) {
      maxCount = colors[node];
      res = node;
    }
  }

  return res;

  function dfs(start, color) {
    colors[start] = color;
    for (let i = 0; i < N; i++) {
      if (graph[start][i] === 1 && colors[i] === 0) {
        dfs(i, color);
      }
    }
  }
};
// @lc code=end

// minMalwareSpread(
//   [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ],
//   [0, 1]
// );
