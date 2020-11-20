/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');

  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  const sum = [];
  let carry = 0,
    cur = 0;
  for (let i = 0; i < num1.length; i++) {
    cur = parseInt(num1[i]) + parseInt(num2[i] || '0') + carry;
    carry = Math.floor(cur / 10);
    cur = cur % 10;
    sum.push(cur);
  }
  if (carry) {
    sum.push(carry);
  }
  return sum.reverse().join('');
}
// @lc code=end

console.log(addStrings('9', '99'));
