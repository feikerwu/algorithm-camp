const remainder = 10 ** 9 + 7;

function countPairs(deliciousness: number[]): number {
  let map = new Map<number, number>();
  let res = 0;
  for (let food of deliciousness) {
    for (let i = 0; i <= 22; i++) {
      const pair = (1 << i) - food;
      if (pair > 0 && map.has(pair)) {
        res = (res + map.get(pair)) % remainder;
      }
    }

    map.set(food, (map.get(food) || 0) + 1);
  }

  return res;
}

countPairs([1, 3, 5, 7, 9]);
