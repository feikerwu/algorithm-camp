/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

class TrieNode {
  isWord = false;

  constructor() {
    this.isWord = false;
    this.children = Array.from({ length: 26 }).fill(null);
  }
}

const charCode = char => char.charCodeAt() - 'a'.charCodeAt();
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let char of word) {
    if (!cur.children[charCode(char)]) {
      cur.children[charCode(char)] = new TrieNode();
    }

    cur = cur.children[charCode(char)];
  }

  cur.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let char of word) {
    if (!cur.children[charCode(char)]) {
      return false;
    }

    cur = cur.children[charCode(char)];
  }

  return cur.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let char of prefix) {
    if (!cur.children[charCode(char)]) {
      return false;
    }

    cur = cur.children[charCode(char)];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
