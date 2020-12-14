/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  // let R = true,
  //   D = true;
  // senate = senate.split('');
  // let person = 0;
  // while (R && D) {
  //   R = D = false;
  //   for (let i = 0; i < senate.length; i++) {
  //     if (senate[i] === 'R') {
  //       R = true;
  //       if (person > 0) {
  //         senate[i] = '0';
  //       }
  //       person--;
  //     } else if (senate[i] === 'D') {
  //       D = true;
  //       if (person < 0) {
  //         senate[i] = '0';
  //       }
  //       person++;
  //     }
  //   }
  // }
  // return person > 0 ? 'Dire' : 'Radiant';
  let R = [],
    D = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      R.push(i);
    } else {
      D.push(i);
    }
  }
  let len = senate.length;
  while (R.length && D.length) {
    if (R[0] < D[0]) {
      R.push(R[0] + len);
    } else {
      D.push(D[0] + len);
    }
    R.shift();
    D.shift();
  }
  return R.length ? 'Radiant' : 'Dire';
};
// @lc code=end
console.log(predictPartyVictory('RD'));
