/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start

class Heap {
  constructor(arr) {
    this.arr = arr
    this.heapfy()
  }

  heapfy() {
    const {arr} = this
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.shiftdown(i)
    }
  }

  shiftdown(index) {
    const {arr} = this
    for (let j = 2 * index + 1; j < arr.length; j = 2 * j + 1) { // 因为交换后，当前堆顶下的所有堆都会失衡，需要重新建堆
      if (j + 1 < arr.length && arr[j + 1] > arr[j]) {
        j = j + 1 // 找到两个儿子中最大的
      }
      if (arr[index] < arr[j]) {
        this.swap(index, j)
        index = j
      } else {
        break
      }
    }
  }

  swap(a, b) {
    const {arr} = this
    const term = arr[a]
    arr[a] = arr[b]
    arr[b] = term
  }

  sort() {
    const {arr} = this
    for (let i = arr.length - 1; i >= 0; i--) {
      this.swap(i, 0)
      this.shiftdown(0)
    }
  }

  getValue() {
    return this.arr
  }

  unshift() {
    this.swap(i, 0)
    const value = this.arr.pop()
    this.shiftdown(0)
    return value
  }
}


const test = new Heap([2, 3, 5, 4, 1, 8, 9, 10])
console.log(test)
test.sort()
console.log(test.getValue())


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

};
// @lc code=end

