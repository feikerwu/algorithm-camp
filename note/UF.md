#### 并查集实现

```ts
class UF<T> {
  private parents: Map<T, T> = new Map();
  private ranks: Map<T, number> = new Map();

  constructor(values: T[]) {
    this.makeSet(values);
  }

  makeSet(values: T[]) {
    values.forEach((value) => {
      this.parents.set(value, value);
      this.ranks.set(value, 0);
    });
  }

  find(value: T) {
    const parent = this.parents.get(value);
    if (parent === value) {
      return parent;
    }
    this.parents.set(value, this.find(parent));
    return this.parents.get(value);
  }

  union(x: T, y: T) {
    const xRank = this.ranks.get(x);
    const yRank = this.ranks.get(y);
    const xRoot = this.parents.get(x);
    const yRoot = this.parents.get(y);
    if (xRank > yRank) {
      this.parents.set(yRoot, xRoot);
    } else {
      this.parents.set(xRoot, yRoot);
      if (xRank === yRank) {
        this.ranks.set(y, yRank + 1);
      }
    }
  }
}
```
