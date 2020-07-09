var divingBoard = function (shorter, longer, k) {
  if (k === 0) {
    return [];
  }
  let res = new Set();
  for (let i = 0; i <= k; i++) {
    res.add(longer * i + shorter * (k - i));
  }
  return [...res];
};
