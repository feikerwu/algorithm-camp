/**
 * 暴力解法
 * 定义 dp[i] 为当前 snetence 到 i 为止的最小未识别字符数,
 * 时间复杂度 O(n * n), n为sentence长度
 * 空间复杂度 O(max(dictionary.length, sentence,length))
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respaceXX = function (dictionary, sentence) {
  let s = new Set(dictionary);
  let dp = Array.from(sentence, (v, i) => i + 1);
  dp.unshift(0);
  for (let i = 1; i <= sentence.length; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 1; j <= i; j++) {
      if (s.has(sentence.substring(j - 1, i))) {
        dp[i] = Math.min(dp[i], dp[j - 1]);
      }
    }
  }
  console.log({ dp });
  return dp[sentence.length];
};

/**
 * tire 树 + dp
 * @param {}} dictionary
 * @param {*} sentence
 */
var respace = function (dictionary, sentence) {
  let root = makeTire(dictionary);
  const dp = [0, ...Array.from(sentence, (v, i) => i + 1)];

  for (let i = 1; i <= sentence.length; i++) {
    dp[i] = dp[i - 1] + 1;
    let term = root;
    for (let j = i; j >= 1; j--) {
      if (term.children[charDiff(sentence[j - 1])] === null) {
        break;
      } else if (term.children[charDiff(sentence[j - 1])].isWord) {
        dp[i] = Math.min(dp[i], dp[j - 1]);
      }
      term = term.children[charDiff(sentence[j - 1])];
    }
  }
  return dp[snetence.length];
};

/**
 * 获取tire树
 * @param {} dic 字符串字典
 */
function makeTire(dic) {
  let root = new TireNode(null);
  for (let i = 0; i < dic.length; i++) {
    let word = dic[i];
    term = root;
    for (let j = word.length - 1; j >= 0; j--) {
      let charDisFromA = charDiff(word[j]);
      if (!term.children[charDisFromA]) {
        term.children[charDisFromA] = new TireNode(word[j]);
      }
      term = term.children[charDisFromA];
    }
    term.isWord = true;
  }

  return root;
}

function charDiff(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
}

function TireNode(val, isWord) {
  this.val = val;
  this.isWord = isWord;
  this.children = Array.from({ length: 26 }).fill(null);
}
