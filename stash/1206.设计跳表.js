/*
 * @lc app=leetcode.cn id=1206 lang=javascript
 *
 * [1206] 设计跳表
 */

// @lc code=start

function Node(val, next = null, down = null) {
  this.val = val;
  this.next = next;
  this.down = down;
}

var Skiplist = function () {
  this.head = new Node(null);
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  let head = this.head;
  while (head) {
    while (head.next && head.next.val < target) {
      head = head.next;
    }
    if (!head.next || head.next.val > target) {
      head = head.down;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  const stack = [];
  let cur = this.head;
  while (cur) {
    while (cur.next && cur.next.val < num) {
      cur = cur.next;
    }
    stack.push(cur);
    cur = cur.down;
  }

  let isNeedInsert = true;
  let downNode = null;
  while (isNeedInsert && stack.length) {
    let pre = stack.pop();
    pre.next = new Node(num, pre.next, downNode);
    downNode = pre.next;
    isNeedInsert = Math.random() < 0.5;
  }
  if (isNeedInsert) {
    this.head = new Node(null, new Node(num, null, downNode), this.head);
  }
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  let head = this.head;
  let seen = false;
  while (head) {
    while (head.next && head.next.val < num) {
      head = head.next;
    }
    if (!head.next || head.next.val > num) {
      head = head.down;
    } else {
      seen = true;
      head.next = head.next.next;
      head = head.down;
    }
  }
  return seen;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
// @lc code=end
