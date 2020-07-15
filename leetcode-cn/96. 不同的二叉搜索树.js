/**
 * 递归
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += numTrees(i - 1) * numTrees(n - i);
  }
  return res;
};

let memo = {};
var numTrees = function (n) {
  if (memo[n]) {
    return memo[n];
  }

  if (n === 0 || n === 1) {
    return 1;
  }
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += numTrees(i - 1) * numTrees(n - i);
  }

  memo[n] = res;
  return res;
};

numTrees(3);
