/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 先序遍历构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) {
    return null
  }
  let cur = preorder[0]
  let root = new TreeNode(cur)
  let leftPreOrder = [],
    rightPreOrder = []

  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] < cur) {
      leftPreOrder.push(preorder[i])
    } else {
      rightPreOrder.push(preorder[i])
    }
  }

  root.left = bstFromPreorder(leftPreOrder)
  root.right = bstFromPreorder(rightPreOrder)

  return root
}
// @lc code=end
