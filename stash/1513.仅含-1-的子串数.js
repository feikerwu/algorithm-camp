/*
 * @lc app=leetcode.cn id=1513 lang=javascript
 *
 * [1513] 仅含 1 的子串数
 */

// @lc code=start
/**
 * 时间复杂度: $O(n)$
 * 空间复杂度: $O(n)$
 * @param {string} s
 * @return {number}
 */
const mod = Math.pow(10, 9) + 7;
var numSub = function (s) {
  let pre = Array.from(s).fill(0);
  let preOne = 0;
  for (let i = 0; i < s.length; i++) {
    preOne = s[i] === '1' ? preOne + 1 : 0;
    pre[i] = preOne;
  }
  let dp = Array.from(s).fill(0);
  if (s[0] === '1') {
    dp[0] = 1;
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1') {
      dp[i] = (dp[i - 1] + pre[i]) % mod;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[dp.length - 1];
};
// @lc code=end
numSub('1111111111011010011');
