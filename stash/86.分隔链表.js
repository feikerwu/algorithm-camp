/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let [ph1, ph2] = [new ListNode(), new ListNode()];
  let [p1, p2] = [ph1, ph2];
  while (head) {
    if (head.val < x) {
      p1.next = head;
      p1 = p1.next;
    } else {
      p2.next = head;
      p2 = p2.next;
    }
    head = head.next;
  }
  p1.next = ph2.next;
  p2.next = null;
  return ph1.next;
};
// @lc code=end
