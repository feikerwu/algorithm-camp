/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  K = K.toString().split('');
  if (K.length > A.length) {
    [A, K] = [K, A];
  }
  A = A.reverse();
  K = K.reverse();
  let i = 0;
  let carry = 0;
  while (i < A.length) {
    let curSum = +A[i] + (K[i] ? +K[i] : 0) + carry;
    A[i] = Math.floor(curSum / 10);
    carry = curSum % 10;
    i++;
  }
  if (carry) {
    A.push(carry);
  }
  return A.reverse();
};
