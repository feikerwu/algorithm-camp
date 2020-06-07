/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = [homepage]
  this.cur = 0
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history = this.history.slice(0, this.cur + 1)
  this.history.push(url)
  this.cur = this.cur + 1
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  if (steps - 1 >= this.cur) {
    this.cur = 0
  } else {
    this.cur = this.cur - steps
  }

  return this.history[this.cur]
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  if (this.cur + steps >= this.history.length) {
    this.cur = this.history.length - 1
  } else {
    this.cur = this.cur + steps
  }
  return this.history[this.cur]
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */