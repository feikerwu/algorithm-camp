1. 剑指 Offer 10- I. 斐波那契数列: 查表

```js
const maxSize = 102;
const table = Array.from({ length: maxSize }).fill(0);
table[1] = 1;
for (let i = 2; i < maxSize; i++) {
  table[i] = (table[i - 1] + table[i - 2]) % (1e9 + 7);
}
var fib = function (n) {
  return table[n];
};
```

2. 剑指 Offer 10- II. 青蛙跳台阶问题 同上，打表

```js
const maxSize = 102;
const table = Array.from({ length: maxSize }).fill(1);
table[1] = 1;
for (let i = 2; i < maxSize; i++) {
  table[i] = (table[i - 1] + table[i - 2]) % (1e9 + 7);
}
var numWays = function (n) {
  return table[n];
};
```

3. 剑指 Offer 11. 旋转数组的最小数字

```js
var minArray = function (numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      return numbers[i];
    }
  }
  return numbers[0];
};
```

4. 剑指 Offer 12. 矩阵中的路径
