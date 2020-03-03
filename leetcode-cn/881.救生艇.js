/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people = people.sort((a, b) => a - b)
  let res = 0;
  while(people.length) {
    let heaviest = people.pop()
    if (people.length > 0 && heaviest + people[0] <= limit) {
      people.shift()
    }
    res++
  }
  return res
};
// @lc code=end

