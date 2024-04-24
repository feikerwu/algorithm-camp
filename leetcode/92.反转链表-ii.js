/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (head === null || head.next === null) {
    return head;
  }

  let start = head,
    end = head,
    dummy = head,
    step = 1;

  while (dummy !== null) {
    if (step + 1 === left) {
      start = dummy;
    }

    if (step === right) {
      end = dummy;
    }

    dummy = dummy.next;
    step++;
  }

  let endNext = end.next;
  let preNext = start.next;

  start.next = end;

  let cur = preNext,
    pre = endNext;

  while (cur !== null && cur !== endNext) {
    let next = cur.next;
    cur.next = pre;
    cur = next;
  }

  return head;
};
// @lc code=end
