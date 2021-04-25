/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * 中序遍历将BST的每个节点读取并保存，重新构建
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let nodes = [];
  inorder(root, nodes);
  let newRoot = new TreeNode();
  let iterator = newRoot;
  for (let node of nodes) {
    let curTreeNode = new TreeNode(node);
    iterator.right = curTreeNode;
    iterator = iterator.right;
  }
  return newRoot.right;
};

function inorder(root, res) {
  if (root.left) {
    inorder(root.left, res);
  }
  res.push(root.val);
  if (root.right) {
    inorder(root.right, res);
  }
}

// 原地中序遍历
function increasingBST(root) {
  let dummy = new TreeNode();
  let iterator = dummy;
  inorder(root);
  return dummy.right;

  function inorder(cur) {
    if (!cur) {
      return;
    }
    inorder(cur.left);
    iterator.right = cur;
    cur.left = null;
    iterator = cur;
    inorder(cur.right);
  }
}

// @lc code=end
