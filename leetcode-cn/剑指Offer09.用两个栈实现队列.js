var CQueue = function () {
  this.s1 = new Array();
  this.s2 = new Array();
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.s1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.s1.length === 0) {
    return -1;
  }
  const { s1, s2 } = this;
  while (s1.length) {
    s2.push(s1.pop());
  }
  const cur = s2.pop();
  while (s2.length) {
    s1.push(s2.pop());
  }
  return cur;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
