/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

const { get } = require('http');

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let res = [-Infinity];
  for (let i = 0; i <= k; i++) {
    if (i <= nums1.length && k - i <= nums2.length) {
      let cur = merge(getValue(nums1, i), getValue(nums2, k - i));
      console.log({ cur, res });
      res = res.join('') < cur.join('') ? cur : res;
    }
  }
  return res;
};

function merge(A, B) {
  const merged = [];
  while (A.length && B.length) {
    const poper = A > B ? A : B;
    merged.push(poper.shift());
  }
  merged.push(...A, ...B);
  return merged;
}

function getValue(nums, remain) {
  let drop = nums.length - remain;
  const stack = [];
  for (num of nums) {
    while (drop && stack.length && stack[stack.length - 1] < num) {
      drop--;
      stack.pop();
    }
    stack.push(num);
  }
  return stack.slice(0, remain);
}
// @lc code=end

// console.log(less([9, 8, 4, 6, 5], [9, 8, 6, 5, 3]));

// maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5);
