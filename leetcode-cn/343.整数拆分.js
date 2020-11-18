/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  if (n === 4) {
    return 4;
  }

  let arr = [];
  while (n > 4) {
    arr.push(3);
    n = n - 3;
  }
  arr.push(n);
  return arr.reduce((acc, cur) => acc * cur, 1);
};

integerBreak(10);
