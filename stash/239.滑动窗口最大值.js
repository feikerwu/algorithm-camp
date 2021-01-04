/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * 用单调队列简化极值判断，用下标确定越界                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  const dequeue = [];
  let res = [];
  for (var i = 0; i < nums.length; i++) {
    push(i);
    if (i >= k - 1) {
      res.push(nums[dequeue[0]]);
    }
  }

  return res;

  function push(index) {
    while (index - dequeue[0] >= k) {
      dequeue.shift();
    }
    while (dequeue.length && nums[dequeue[dequeue.length - 1]] < nums[index]) {
      dequeue.pop();
    }
    dequeue.push(index);
  }
};