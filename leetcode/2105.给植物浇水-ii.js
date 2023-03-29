/*
 * @lc app=leetcode.cn id=2105 lang=javascript
 *
 * [2105] 给植物浇水 II
 */

// @lc code=start
/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let count = Math.floor(plants.length / 2),
    result = 0;

  let curCapccityA = capacityA,
    curCapccityB = capacityB;

  for (let i = 0; i < count; i++) {
    if (curCapccityA < plants[i]) {
      result += 1;
      curCapccityA = capacityA;
    }

    curCapccityA = curCapccityA - plants[i];

    if (curCapccityB < plants[plants.length - 1 - i]) {
      result += 1;
      curCapccityB = capacityB;
    }

    curCapccityB = curCapccityB - plants[plants.length - 1 - i];
  }

  if (plants.length % 2) {
    result += Math.max(curCapccityA, curCapccityB) < plants[count];
  }

  return result;
};
// @lc code=end
