/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let flag = 0
  for (let i = 1; i < A.length; i++) {
    let curSub = A[i] - A[i-1]
    if (flag === 0) {
      flag = curSub
    } else {
      if (flag * curSub < 0) {
        return false
      }
    }
  }
  return true
};