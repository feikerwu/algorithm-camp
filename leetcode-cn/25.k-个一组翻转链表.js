/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // 标兵
  let dummy = new ListNode()
  dummy.next = head
  let [start, end] = [dummy, dummy.next]
  let count = 0
  while(end) {
    count++
    if (count % k === 0) {
      start = reverseList(start, end.next)
      end = start.next
    } else {
      end = end.next
    }
  }
  return dummy.next

  // 翻转stat -> end的链表
  function reverseList(start, end) {
    let [pre, cur] = [start, start.next]
    const first = cur
    while(cur !== end) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    start.next = pre
    first.next = cur
    return first
  }
};
// @lc code=end

