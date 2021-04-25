// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
  words = words.map(word => getNumber(word).transfromed);
  puzzles = puzzles.map(word => getNumber(word));

  const result = [];
  for (let { first, transfromed } of puzzles) {
    let count = 0;
    console.log({
      first: first.toString(2),
      transfromed: transfromed.toString(2),
    });
    for (let word of words) {
      if ((first & word) !== 0 && (transfromed & word) === word) {
        count++;
      }
    }
    result.push(count);
  }
  console.log(result);
  return result;
};
// @lc code=end

function getNumber(str) {
  if (str === '0') {
    return { first: 0, transfromed: 0 };
  }
  const first = 1 << charCode(str[0]);
  let result = 0;
  for (let char of str) {
    result = result | (1 << charCode(char));
  }
  return { first: first, transfromed: result };
}

function charCode(char) {
  return char.charCodeAt() - 'a'.charCodeAt() + 1;
}
