/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 子数组异或查询
 */

// @lc code=start
/**
 * 利用前缀和的思路，a ^ b ^ c ^ d ^ a ^ b  = c ^ d, 所以 answer([1, 3]) = a1 ^ a2 ^ a3 = a0 ^ a0 ^ a1 ^ a2 ^ a3
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let dummy = 0;
  const preprocess = [dummy];
  for (let num of arr) {
    dummy = dummy ^ num;
    preprocess.push(dummy);
  }
  return queries.map(([start, end]) => preprocess[start] ^ preprocess[end + 1]);
};
// @lc code=end
