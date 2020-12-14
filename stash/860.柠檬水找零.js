/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let map = { 5: 0, 10: 0, 20: 0 };
  for (let bill of bills) {
    if (bill === 5) {
      map[5]++;
    } else if (bill === 10) {
      map[5]--;
    } else {
      map[20]++;
      if (map[10] > 0) {
        map[10]--;
        map[5]--;
      } else {
        map[5] = map[5] - 3;
      }
    }
    if (map[5] < 0 || map[10] < 0 || map[20] < 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end
