/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.values = new Array()
  this.incs = new Array(maxSize).fill(0)
  this.maxSize = maxSize
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.values.length < this.maxSize) {
    this.values.push(x)
  }
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  const { values, incs } = this
  const { length } = values
  if (values.length === 0) {
    return -1
  }

  const inc = incs[length - 1]
  incs[length - 2] += inc
  incs[length - 1] = 0

  const cur = values.pop()

  return cur + inc
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const size = k < this.values.length ? k : this.values.length
  this.incs[size - 1] += val
  // console.log(this.incs)
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end
