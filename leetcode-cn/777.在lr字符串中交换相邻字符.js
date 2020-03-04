/*
 * @lc app=leetcode.cn id=777 lang=javascript
 *
 * [777] 在LR字符串中交换相邻字符
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  let startCopy = start
  let endCopy = end
  if (startCopy.replace(/X/g, '') !== endCopy.replace(/X/g, '')) {
    console.log('here')
    return false
  }
  let p1 = p2 = 0;
  while(p1 < start.length && p2 < end.length) {
    while(start[p1] === 'X') {
      p1++
    }
    while(end[p2] === 'X') {
      p2++
    }
    if (start[p1] !== end[p2]) {
      return false
    } else {
      if ((start[p1] === 'L' && p1 < p2) || (start[p1] === 'R' && p1 > p2)) {
        return false
      }
    }
    p1++;
    p2++;
  }
  return true
};
// @lc code=end

canTransform('XXXXXLXXXX', 'LXXXXXXXXX')