function TreeNode(val) {}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let memo = {
  0: [[null]],
  1: [[1]],
};
var generateTrees = function (n) {
  if (memo[n]) {
    return memo[n];
  }
  let res = [];
  for (let i = 1; i <= n; i++) {
    let left = generateTrees(i - 1);
    let right = generateTrees(n - i);
    for (let leftTree of left) {
      for (let rightTree of right) {
        res.push([i, ...leftTree, ...cloneTree(rightTree, i)]);
      }
    }
  }
  memo[n] = res;

  return res;
};

function cloneTree(arr, offset) {
  return arr.map((item) => (item === null ? null : item + offset));
}

generateTrees(3);
console.log(memo[3]);
// console.log(memo);
