/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence1 = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

var isSubsequence = function (s, t) {
  let table = makeTable(t);
  // console.log(table);
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    console.log({ code });
    start = table[start][code];
    console.log({ start });
    if (start === -1) {
      return false;
    }
  }
  return true;
};

function makeTable(t) {
  let newT = ' ' + t;
  // let newT = t;
  let table = Array.from(t, (v) => Array.from({ length: 26 }).fill(-1));

  for (let i = 0; i < 26; i++) {
    let p = -1;
    for (let j = newT.length - 1; j >= 0; j--) {
      table[j][i] = p;
      let code = newT[j].charCodeAt() - 'a'.charCodeAt();
      console.log({ code });
      if (code === i) {
        p = j;
      }
    }
  }
  // console.log(table);
  return table;
}

console.log(isSubsequence('abc', 'ahbgdc'));
