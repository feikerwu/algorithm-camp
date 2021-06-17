/**
 * 1. 使用滑动窗口来实现最小覆盖
 * 2. 使用一个额外total数字来实现一个track
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = {};
  // 初始化字典
  for (let char of s) {
    map[char] = 0;
  }

  for (let char of t) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }

  let totalCount = t.length;

  let start = 0,
    end = 0,
    res = 0,
    size = Infinity;

  while (end < s.length) {
    if (map[s[end]] > 0) {
      totalCount--;
    }

    map[s[end]]--;

    if (totalCount === 0) {
      while (start < end && map[s[start]] < 0) {
        map[s[start]]++;
        start++;
      }
      if (end - start + 1 < size) {
        size = end - start + 1;
        res = start;
      }
      map[s[start]]++;
      start++;
      totalCount++;
    }
    end++;
  }

  return size === Infinity ? '' : s.substr(res, size);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
