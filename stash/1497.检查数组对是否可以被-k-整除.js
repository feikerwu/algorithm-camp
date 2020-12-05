/*
 * @lc app=leetcode.cn id=1497 lang=javascript
 *
 * [1497] 检查数组对是否可以被 k 整除
 */

// @lc code=start
/**
 * 对每个数对K取模后进行hash
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  let map = {};
  for (let num of arr) {
    let mod = ((num % k) + k) % k;
    map[mod] = (map[mod] || 0) + 1;
  }

  for (let i = 1; i + i <= k; i++) {
    if (map[i] !== map[k - i]) {
      return false;
    }
  }

  return (map[0] || 0) % 2 === 0;
};

// @lc code=end
