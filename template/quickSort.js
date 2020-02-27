/**
 * 快速排序
 * @param {*} arr 待排数组
 * @param {*} left 排序区间左侧
 * @param {*} right 排序区间右测
 */
function quickSort(arr, left, right) {
  if (right - left < 1) {
    return
  }
  let provit = partition(arr, left, right);
  quickSort(arr, left, provit, left)
  quickSort(arr, provit + 1, right)
}

// 原地分割，空间O(1)
function partition(arr, left, right) {
  // 简单的挑选第一个数作为基准
  let provit = left
  let provitValue = arr[left]
  swap(arr, right, provit) // 将基准放到最后
  let curProvit = left
  for (let i = left; i < right; i++) {
    if (arr[i] < provitValue) { // 将数组根据provit分割
      swap(arr, curProvit, i)
      curProvit = curProvit + 1
    }
  }
  swap(arr, curProvit, right)
  return curProvit
}

function swap(arr, a, b) {
  let term = arr[a]
  arr[a] = arr[b]
  arr[b] = term
}

// let arr = [2, 4, 2, 1, 3, 5, 1]
let arr = [1, 1, 1, 1, 2]
quickSort(arr, 0, arr.length - 1)
console.log(arr)