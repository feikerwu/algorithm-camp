function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let start = 0,
    end = start + 1,
    result = -Infinity;

  let total = 0;
  while (start <= end && end < nums.length) {
    // 向右边每移动一位，都会提供 (nums[end] - nums[end - 1]) * (end - start) 步的贡献
    total = total + (nums[end] - nums[end - 1]) * (end - start);
    while (total > k) {
      // 左窗口移动，左窗口每移动一位，都会减少(右窗口到左窗口个步数)
      total = total - (nums[end] - nums[start]);
      start++;
    }

    result = Math.max(result, end - start + 1);
    end++;
  }

  return result;
}

console.log(maxFrequency([3, 9, 6], 2));
