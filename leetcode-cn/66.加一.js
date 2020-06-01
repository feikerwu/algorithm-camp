/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  digits[1] = 0
  return digits
  // let carry = 1;
  // for (let i = digits.length - 1; i >= 0; i--) {
  //   const sum = digits[i] + carry;
  //   carry = ~~(sum / 10)
  //   digits[i] = sum % 10
  //   if (carry === 0) {
  //     break
  //   }
  // }
  // // console.log(carry)
  // return carry ? [carry, ...digits] : digits
};
// @lc code=end
console.log(plusOne([9]))
