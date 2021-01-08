var rotate = function (nums, k) {
  const len = nums.length;
  k = k % len;
  reverse(nums, len - k, len);
  reverse(nums, 0, len - k);
  reverse(nums, 0, len);
};

function reverse(nums, start, end) {
  let left = start,
    right = end - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
