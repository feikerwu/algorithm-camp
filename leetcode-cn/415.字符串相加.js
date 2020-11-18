/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1.length > num2.length) {
    [num1, num2] = [num2, num1];
  }

  let res = [];
  let carry = 0;

  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();

  for (let i = 0; i < num2.length; i++) {
    let a = i < num1.length ? parseInt(num1[i]) : 0;
    let b = parseInt(num2[i]);
    let sum = a + b + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    res.unshift(sum);
  }

  if (carry) {
    res.unshift(carry);
  }

  return res.join('');
};
