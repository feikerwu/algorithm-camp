/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head;

  while (cur) {
    let next = cur.next;
    while (next && cur.val === next.val) {
      next = next.next;
    }
    cur.next = next;
    cur = cur.next;
  }
  return head;
};
// @lc code=end
