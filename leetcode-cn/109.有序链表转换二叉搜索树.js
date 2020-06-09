/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 将链表转化为顺序数组
 * @param {ListNode} head
 * @return {TreeNode}
 */
// var sortedListToBST = function (head) {
//   const arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }

//   return buildTree(arr);
// };

// function buildTree(arr) {
//   if (arr.length === 1) {
//     return new TreeNode(arr[0]);
//   }
//   if (arr.length === 0) {
//     return null;
//   }

//   let mid = ~~(arr.length / 2);
//   let root = new TreeNode(arr[mid]);
//   root.left = buildTree(arr.slice(0, mid));
//   root.right = buildTree(arr.slice(mid + 1));
//   return root;
// }
function sortedListToBST(head) {
  // 找到中间节点，将链表划分为左右两个部分
  let sentry = new ListNode();
  sentry.next = head;
  let slow = sentry,
    fast = sentry,
    pre = sentry;
  while (slow && fast) {
    pre = slow;
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }

  pre.next = null;
  if (slow === null) {
    return null;
  }
  let root = new TreeNode(slow.val);
  if (head === slow && slow.next === null) {
    return root;
  }
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(slow.next);
  return root;
}

// 1. 将链表拆分为 left, cur, right
// 2. cur构建成节点，cur.left = sortedListToBST(left), cur.right = sortedListToBST(right), 返回当前root

// @lc code=end
