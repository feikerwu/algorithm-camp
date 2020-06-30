/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let visited = new Set(deadends);

  if (visited.has('0000')) {
    return -1;
  }
  let q = ['0000'];
  let deep = 1;
  while (q.length) {
    let next = [];
    for (let i = 0; i < q.length; i++) {
      let cur = q[i];
      console.log(cur);
      for (let i = 0; i < 4; i++) {
        let a = plus(cur, i);
        let b = minus(cur, i);
        if (!visited.has(a)) {
          next.push(a);
          visited.add(cur);
        }
        if (!visited.has(b)) {
          next.push(b);
          visited.add(cur);
        }
        if (target === a || target === b) {
          // console.log({ deep });
          return deep;
        }
      }
    }
    deep++;
    q = null;
    q = next;
  }

  return -1;
};

function plus(cur, i) {
  let term = cur.split('');
  term[i] = (parseInt(term[i]) + 1) % 10;
  return term.join('');
}

function minus(cur, i) {
  let term = cur.split('');
  term[i] = (parseInt(term[i]) + 10 - 1) % 10;
  return term.join('');
}
// @lc code=end

openLock(
  ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
  '8888'
);
