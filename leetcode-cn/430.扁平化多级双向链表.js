/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) {
    return head
  }
  const sentry = new Node(null)
  sentry.next = head
  head.prev = sentry
  dfs(sentry, head)
  sentry.next.prev = null
  return sentry.next
};

function dfs(pre, cur) {
  if (!cur) {
    return pre
  }
  let originalNext = cur.next
  pre.next = cur
  cur.prev = pre
  let tail = dfs(cur, cur.child)
  cur.child = null
  return dfs(tail, originalNext)
}
