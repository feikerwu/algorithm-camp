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
var detectCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast) {
    slow = slow.next;

    if (fast.next === null) {
      return null;
    }

    fast = fast.next.next;

    if (slow === fast) {
      let term = head;
      while (slow !== term) {
        term = term.next;
        slow = slow.next;
      }
      return term;
    }
  }

  return null;
};
