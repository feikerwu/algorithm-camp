/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 * 使用一个hashMap + 一个动态数组来实现
 */
var RandomizedSet = function() {
  this.values = []
  this.valueToIndex = new Map()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.valueToIndex.has(val)) {
    return false
  }
  this.values.push(val)
  this.valueToIndex.set(val, this.values.length - 1)
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.valueToIndex.has(val)) {
    return false
  }
  const removeIndex = this.valueToIndex.get(val)
  // 交换要删除的值到最后，每次只删除最后的值
  this.swap(removeIndex, this.values.length - 1)

  this.values.pop()
  return this.valueToIndex.delete(val)
};

RandomizedSet.prototype.swap = function(idx1, idx2) {
  const { values } = this
  values[idx1] = values[idx1] ^ values[idx2]
  values[idx2] = values[idx1] ^ values[idx2]
  values[idx1] = values[idx1] ^ values[idx2]
  this.values = values

  // 将位置正确绑定
  this.valueToIndex.set(this.values[idx1], idx1)
  this.valueToIndex.set(this.values[idx2], idx2)
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.values.length)
  return this.values[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
const t = new RandomizedSet()
t.insert(0)
t.insert(1)
t.remove(0)
t.insert(2)
t.remove(1)
t.getRandom()
