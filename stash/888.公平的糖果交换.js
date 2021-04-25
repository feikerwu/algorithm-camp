/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);
const sort = arr => arr.sort((a, b) => a - b);
function find(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const medium = Math.floor((high + low) / 2);
    if (arr[medium] < target) {
      low = medium + 1;
    } else if (arr[medium] > target) {
      high = medium - 1;
    } else {
      return true;
    }
  }
  return false;
}
var fairCandySwap = function (A, B) {
  sort(A);
  sort(B);
  const [sumA, sumB] = [sum(A), sum(B)];
  const delta = Math.floor((sumB - sumA) / 2);
  for (let ele of A) {
    if (find(B, ele + delta)) {
      return [ele, ele + delta];
    }
  }
};
// @lc code=end

// console.log(fairCandySwap([2], [1, 3]));
