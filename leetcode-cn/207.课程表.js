/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let ins = Array.from({ length: numCourses }).fill(0);
  // let visited = ins.slice();
  for (let [a, b] of prerequisites) {
    ins[a]++;
  }
  console.log(ins);
  let queue = ins.filter((v) => v === 0);
  console.log(queue);
  while (queue.length) {
    let cur = queue.shift();
    numCourses--;
    for (let [a, b] of prerequisites) {
      if (cur === b) {
        ins[a]--;
        if (ins[a] === 0) {
          // console.log('here');
          queue.push(ins[a]);
        }
      }
    }
    // visited[cur] = 1;
  }
  return numCourses === 0;
};

canFinish(2, [[1, 0]]);
