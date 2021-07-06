function displayTable(orders: string[][]): string[][] {
  const foods = [...new Set(orders.map(order => order[2]))].sort();
  const header = ['Table', ...foods];
  const m = new Map<string, Map<string, number>>();
  for (let [name, table, food] of orders) {
    if (!m.has(table)) {
      m.set(table, new Map());
    }
    let foodMap = m.get(table);
    foodMap.set(food, (foodMap.get(food) || 0) + 1);
  }

  let result = [];
  for (let [tableName, foodMap] of m) {
    let curTable: string[] = [tableName];
    for (let food of foods) {
      curTable.push(`${foodMap.get(food) || 0}`);
    }
    result.push(curTable);
  }

  return [header, ...result.sort((a, b) => a[0] - b[0])];
}
