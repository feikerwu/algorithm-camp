/*
 * @lc app=leetcode.cn id=1487 lang=javascript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const m = {};
  const res = [];
  for (let name of names) {
    if (!m[name]) {
      res.push(name);
      m[name] = 1;
      continue;
    }
    let idx = 1;
    while (true) {
      let term = `${name}(${idx++})`;
      if (m[term]) {
        continue;
      }
      res.push(term);
      m[term] = 1;
      break;
    }
  }
  return res;
};
// @lc code=end
