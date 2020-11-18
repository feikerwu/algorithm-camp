function TreeNode(val) {}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let memo = {
  0: [],
  1: [new TreeNode(1)],
};
var generateTrees = function (n) {
  if (memo[n]) {
    return memo[n];
  }
  let res = [];
  for (let i = 1; i <= n; i++) {
    let left = generateTrees(i - 1);
    let right = generateTrees(n - i);
    left.length === 0 && (left = [null]);
    right.length === 0 && (right = [null]);
    for (let leftTree of left) {
      for (let rightTree of right) {
        let curRoot = new TreeNode(i);
        curRoot.left = leftTree;
        curRoot.right = cloneTree(rightTree, i);
        res.push(curRoot);
      }
    }
  }
  memo[n] = res;
  return res;
};

function cloneTree(node, offset) {
  if (node === null) {
    return null;
  }
  let newNode = new TreeNode(node.val + offset);
  newNode.left = cloneTree(node.left, offset);
  newNode.right = cloneTree(node.right, offset);
  return newNode;
}

// generateTrees(3);
// console.log(memo[3]);
// console.log(memo);
