/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const counters = Array.from({ length: n + 2 }).fill(0);

  for (let [from, to, seats] of bookings) {
    counters[from] += seats;
    counters[to + 1] -= seats;
  }

  for (let i = 1; i < counters.length; i++) {
    counters[i] = counters[i] + counters[i - 1];
  }

  return counters.slice(1, n + 1);
};

// @lc code=end
