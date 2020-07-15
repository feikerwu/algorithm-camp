/**
 * dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j]) = v[i][j]
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal1 = function (triangle) {
  let dp = Array.from(triangle, (v) => Array.from(v));
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }
  let res = Infinity;
  for (let i = 0; i < triangle[triangle.length - 1].length; i++) {
    res = Math.min(res, dp[triangle.length - 1][i]);
  }

  return res;
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
