/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let res = 0;

  let pre = 0,
    cur = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cur++;
    } else {
      res += Math.min(pre, cur);
      pre = cur;
      cur = 1;
    }
  }

  res += Math.min(pre, cur);

  return res;
};

// countBinarySubstrings('00110011');
