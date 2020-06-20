/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  let flags = ['*', '/', '+', '-'];
  let idx = 0;
  let ops = [];
  while (N > 0) {
    ops.push(N--);
    if (N > 0) {
      ops.push(flags[idx++ % 4]);
    }
  }

  return calc(ops);
  // return Math.floor(res);
  function calc(ops) {
    let stack = [];
    let i = 0;
    while (i < ops.length) {
      if (ops[i] === '*') {
        let top = stack.pop();
        stack.push(top * ops[i + 1]);
        i += 2;
      } else if (ops[i] === '/') {
        stack.push(Math.floor(stack.pop() / ops[i + 1]));
        i += 2;
      } else {
        stack.push(ops[i]);
        i += 1;
      }
    }

    while (stack.length > 1) {
      let a = stack.shift();
      let op = stack.shift();
      let b = stack.shift();
      if (op === '+') {
        stack.unshift(a + b);
      } else {
        stack.unshift(a - b);
      }
      console.log({ stack });
    }

    return stack[0];
  }
};
// @lc code=end
clumsy(10);
