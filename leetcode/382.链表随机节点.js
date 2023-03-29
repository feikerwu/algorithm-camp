/*
 * @lc app=leetcode.cn id=382 lang=javascript
 *
 * [382] 链表随机节点
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
 */
var Solution = function (head) {
  this.head = head;
};

/**
 * 蓄水池抽样
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let count = 1,
    cur = this.head;

  let result = cur.val;
  while (cur) {
    if (Math.floor(Math.random() * count) === 0) {
      result = cur.val;
    }

    cur = cur.next;
    count++;
  }

  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
