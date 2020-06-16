/*
 * @lc app=leetcode.cn id=1156 lang=javascript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
/**
 * 暴力解法，没有A
 * @param {string} text
 * @return {number}
 */
// var maxRepOpt1 = function (text) {
//   let res = getMaxSubLen(text);
//   let cur = res;
//   for (let i = 0; i < text.length; i++) {
//     for (let j = i + 1; j < text.length; j++) {
//       let curText = swap(text, i, j);
//       console.log({ curText: curText });
//       cur = getMaxSubLen(curText);
//       res = Math.max(res, cur);
//     }
//   }

//   return res;
// };

// function swap(text, i, j) {
//   text = text.split('');
//   let term = text[i];
//   text[i] = text[j];
//   text[j] = term;
//   return text.join('');
// }

// function getMaxSubLen(subText) {
//   if (subText.length === 0) {
//     return 0;
//   }
//   let count = 1;
//   let res = 1;
//   for (let i = 1; i < subText.length; i++) {
//     if (subText[i] !== subText[i - 1]) {
//       res = Math.max(res, count);
//       count = 1;
//     } else {
//       count++;
//     }
//   }
//   res = Math.max(res, count);
//   return res;
// }

// 记录当前字符左右的最长序列数，从而判断结果

var maxRepOpt1 = function (text) {
  if (!text) {
    return 0;
  }
  let strCount = text.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let start = Array.from(text).fill(0),
    end = Array.from(text).fill(0);
  let cur = 1;
  for (let i = 1; i < text.length; i++) {
    start[i] = cur;
    if (text[i] === text[i - 1]) {
      cur++;
    } else {
      cur = 1;
    }
  }

  cur = 1;
  for (let i = text.length - 2; i >= 0; i--) {
    end[i] = cur;
    if (text[i] === text[i + 1]) {
      cur++;
    } else {
      cur = 1;
    }
  }

  let res = 1;
  // console.log(strCount);
  // console.log({ start, end });
  for (let i = 1; i < text.length; i++) {
    res = Math.max(
      res,
      strCount[text[i - 1]] > start[i] ? start[i] + 1 : start[i]
    );
    res = Math.max(res, strCount[text[i + 1]] > end[i] ? end[i] + 1 : end[i]);
    if (text[i - 1] === text[i + 1] && text[i - 1] !== text[i]) {
      res = Math.max(
        res,
        strCount[text[i - 1]] > start[i] + end[i]
          ? start[i] + end[i] + 1
          : start[i] + end[i]
      );
    }
  }
  return res;
};

// maxRepOpt1('aaabaaa');

// maxRepOpt1('aaaaa');
// @lc code=end
