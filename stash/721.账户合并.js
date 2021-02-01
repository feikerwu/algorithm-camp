/**
 * 对email名做并查集计算即可
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const father = {};
  let map = {};
  let res = {};

  const find = x => {
    if (father[x] === undefined) {
      father[x] = x;
    }
    if (father[x] !== x) {
      father[x] = find(father[x]);
    }
    return father[x];
  };

  const union = (x, y) => {
    let [rx, ry] = [find(x), find(y)];
    if (rx !== ry) {
      father[rx] = ry;
    }
  };

  // 对email做反向映射，同时对属于同一个账户下的email做并操作
  for (let account of accounts) {
    const [name, ...emails] = account;
    for (let i = 0; i < emails.length; i++) {
      map[emails[i]] = name;
      if (i < emails.length - 1) {
        union(emails[i], emails[i + 1]);
      }
    }
  }

  // 处理数据，将同个name下所有邮箱地址聚合
  for (let account of accounts) {
    const [, ...emails] = account;
    for (let email of emails) {
      const root = find(email);
      if (!res[root]) {
        res[root] = new Set();
      }
      res[root].add(email);
    }
  }

  const returnRes = [];
  for (let rootEmail of Object.keys(res)) {
    returnRes.push([map[rootEmail], ...Array.from(res[rootEmail]).sort()]);
  }

  return returnRes;
};
