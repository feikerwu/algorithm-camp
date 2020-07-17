/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) {
    [p, q] = [q, p];
  }
  if (root === null) {
    return null;
  }
  let v = root.val;
  return v < p.val
    ? lowestCommonAncestor(root.left, p, q)
    : v > q.val
    ? lowestCommonAncestor(root.right, p, q)
    : root;
};
