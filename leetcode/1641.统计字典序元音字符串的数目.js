/*
 * @lc app=leetcode.cn id=1641 lang=javascript
 *
 * [1641] 统计字典序元音字符串的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const arr = Array.from({ length: 5 }).fill(1);

  for (let i = 2; i <= n; i++) {
    arr[4] = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    arr[3] = arr[0] + arr[1] + arr[2] + arr[3];
    arr[2] = arr[0] + arr[1] + arr[2];
    arr[1] = arr[0] + arr[1];
    arr[0] = arr[0];
  }

  return arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
};
// @lc code=end
