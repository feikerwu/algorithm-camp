/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// const peak = stack => stack[stack.length - 1];

// var maximumSwap = function (num) {
//   splitted = num.toString().split('').map(Number);
//   const stack = [];

//   for (let i = 0; i < splitted.length; i++) {
//     while (stack.length && peak(stack) < splitted[i]) {
//       stack.pop();
//     }
//     stack.push(splitted[i]);
//   }

//   let firstUnequalIndex = -1;
//   for (let i = 0; i < stack.length; i++) {
//     if (splitted[i] !== stack[i]) {
//       firstUnequalIndex = i;
//       break;
//     }
//   }

//   // 如果全一致，则不需要交换
//   if (firstUnequalIndex === -1) {
//     return num;
//   }

//   for (let i = splitted.length - 1; i >= 0; i--) {
//     if (splitted[i] === stack[firstUnequalIndex]) {
//       swap(splitted, firstUnequalIndex, i);
//       break;
//     }
//   }

//   return Number(splitted.join(''));
// };

// function swap(arr, a, b) {
//   let term = arr[a];
//   arr[a] = arr[b];
//   arr[b] = term;
// }

function maximumSwap(num) {
  const list = new Array();
  while (num != 0) {
    list.push(num % 10);
    num = Math.floor(num / 10);
  }
  let n = list.length,
    ans = 0;
  const idx = new Array();

  for (let i = 0, j = 0; i < n; i++) {
    if (list[i] > list[j]) j = i;
    idx.push(j);
  }

  console.log(idx);

  for (let i = n - 1; i >= 0; i--) {
    if (list[idx[i]] != list[i]) {
      const c = list[idx[i]];
      list[idx[i]] = list[i];
      list[i] = c;
      break;
    }
  }
  for (let i = n - 1; i >= 0; i--) ans = ans * 10 + list[i];
  console.log(ans);
  return ans;
}
// @lc code=end
maximumSwap(4321);
