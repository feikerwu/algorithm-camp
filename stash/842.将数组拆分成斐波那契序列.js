/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
const topRange = Math.pow(2, 31) - 1;
var splitIntoFibonacci = function (S) {
  let res = [];
  return backTrack(S, 0) ? res : [];

  function backTrack(S, cur) {
    if (cur === S.length && res.length >= 3) {
      return true;
    }
    for (let i = cur; i < S.length; i++) {
      if (S[cur] === '0' && i > cur) {
        break;
      }
      let curNum = parseInt(S.substring(cur, i + 1));
      if (curNum > topRange) {
        break;
      }
      if (
        res.length >= 2 &&
        res[res.length - 1] + res[res.length - 2] < curNum
      ) {
        break;
      }

      if (
        res.length < 2 ||
        res[res.length - 1] + res[res.length - 2] === curNum
      ) {
        // console.log(res[res.length - 1], res[res.length - 2], curNum);
        res.push(curNum);
        if (backTrack(S, i + 1)) {
          return true;
        }
        res.pop();
      }
    }
    return false;
  }
};
// @lc code=end
