/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function (A, L, R) {
  function atMostK(K) {
    let res = 0;
    let pre = 0;
    for (let num of A) {
      pre = num <= K ? pre + 1 : 0;
      res += pre;
    }
    return res;
  }
  return atMostK(R) - atMostK(L - 1);
};
// @lc code=end
