class Solution {
  solve(nums: Array<number>): number {
    let sorted = new Array<number>();
    let res = 0;
    for (let num of nums) {
      // 搜索符合条件(i < j && num[i] > num[j] * 3)的数的数量
      let indexGreaterThanTripleCurNum = binarySearch(sorted, num * 3);
      res += indexGreaterThanTripleCurNum + 1;

      // 插入num
      let indexGreaterThanCurNum = binarySearch(sorted, num);
      sorted.splice(indexGreaterThanCurNum + 1, 0, num);
    }
    return res;
  }
}

// 二分搜索到第一个比target要大的元素
function binarySearch(arr: number[], target: number) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      high = mid - 1;
    } else if (arr[mid] > target) {
      low = mid + 1;
    }
  }
  // console.log({ low: low - 1 });
  return low - 1;
}

let arr = [7, 1, 2];
let so = new Solution();
console.log(so.solve(arr));

// binarySearch(arr, 10); // -1
// binarySearch(arr, 11); // -1
// binarySearch(arr, 9); // -1
// binarySearch(arr, 1); // 5
// binarySearch(arr, 5); // 2
// binarySearch(arr, 0); // 6
