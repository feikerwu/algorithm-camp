// var findWhetherExistsPath = function (n, graph, start, target) {
//   let graphs = Array.from({ length: n }).map((item) =>
//     Array.from({ length: n }).fill(false)
//   );
//   for (let [x, y] of graph) {
//     graphs[x][y] = true;
//   }

//   for (let k = 0; k < n; k++) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         graphs[i][j] = graphs[i][j] || (graphs[i][k] && graphs[k][j]);
//       }
//     }
//   }

//   return !!graphs[start][target];
// };

function findWhetherExistsPath(n, graph, start, target) {
  let dist = new Array({ length: n }).fill(0);
  dist[start] = 1;
  let graphs = {};
  for (let [x, y] of graph) {
    if (!graphs[x]) {
      graphs[x] = [];
    }
    graphs[x].push(y);
  }

  let queue = [start];
  while (queue.length) {
    let cur = queue.shift();
    for (let next of graphs[cur] || []) {
      if (!dist[next]) {
        queue.push(next);
        dist[next] = 1;
      }
    }
  }

  return !!dist[target];
}
