/**
 * [i, i + j) === [i + j, i + j + j)
 * @param {string} text
 * @return {number}
 */
// var distinctEchoSubstrings = function (text) {
//   let res = 0;
//   let s = new Set();
//   for (let i = 0; i < text.length; i++) {
//     for (let j = 1; i + j * 2 <= text.length; j++) {
//       if (judge(text.substring(i, i + j), text.substring(i + j, i + j + j))) {
//         if (!s.has(text.substring(i, i + j))) {
//           res++;
//           s.add(text.substring(i, i + j));
//         }
//       }
//     }
//   }
//   return res;
// };

// function judge(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// }

function distinctEchoSubstrings(text) {
  let table = Array.from(text, (v) =>
      Array.from({ length: text.length + 1 }).fill(0)
    ),
    s = new Set(),
    res = 0;
  const prime = 1e9 + 7;
  // 计算text左闭右开的子序列 [i, j)的hash值
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j <= text.length; j++) {
      table[i][j] = (26 * table[i][j - 1] + dis(text[j - 1])) % prime;
    }
  }
  // console.log(table);
  for (let i = 0; i < text.length; i++) {
    for (let j = 1; i + j + j <= text.length; j++) {
      if (
        table[i][i + j] === table[i + j][i + j + j] &&
        !s.has(table[i][i + j])
      ) {
        res++;
        s.add(table[i][i + j]);
      }
    }
  }
  console.log({ res });
  return res;
}

function dis(char) {
  return char.charCodeAt() - 'a'.charCodeAt() + 1;
}
