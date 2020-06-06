/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d === 1) {
    const newRoot = new TreeNode(v)
    newRoot.left = root
    return newRoot
  }

  let queue = [root]
  let curLevel = 1
  while(queue.length) {
    if (curLevel === d - 1) {
      for (let i = 0; i < queue.length; i++) {
        const newLeft = new TreeNode(v)
        const newRight = new TreeNode(v)
        newLeft.left = queue[i].left
        newRight.right = queue[i].right
        queue[i].left = newLeft
        queue[i].right = newRight
      }
      return root
    }
    const newLevel = []
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) {
        newLevel.push(queue[i].left)
      }
      if (queue[i].right) {
        newLevel.push(queue[i].right)
      }
    }
    queue = newLevel
    curLevel++
  }
  return root
};
// @lc code=end

