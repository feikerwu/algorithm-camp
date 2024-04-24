/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let pre = head,
    cur = head.next;

  pre.next = null;

  while (cur !== null) {
    const termNext = cur.next;
    cur.next = pre;
    pre = cur;
    cur = termNext;
  }

  return pre;
};
// @lc code=end
