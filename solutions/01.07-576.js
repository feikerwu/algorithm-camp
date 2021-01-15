/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const parents = Array.from({ length: n }).map((v, i) => i);

  let count = n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j]) {
        union(i, j);
      }
    }
  }

  return count;

  function union(x, y) {
    let rootX = find(x);
    let rootY = find(y);
    if (rootX !== rootY) {
      parents[rootX] = rootY;
      count--;
    }
  }

  function find(x) {
    if (parents[x] != x) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  }
};

findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
