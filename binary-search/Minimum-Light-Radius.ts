/**
 * link: https://binarysearch.com/problems/Minimum-Light-Radius
 */

export class Solution {
  solve(nums: Array<number>): number {
    function need(houses: number[], raduis: number) {
      let neededHouse = 0;
      let len = 0,
        i = 0;

      while (i < houses.length) {
        len = houses[i] + 2 * raduis;
        neededHouse++;

        let j = i + 1;
        while (houses[j] <= len) {
          j++;
        }

        i = j;
      }
      return neededHouse;
    }

    nums.sort((a, b) => a - b);
    let begin = 0,
      end = nums[nums.length - 1] - nums[0];

    for (let i = 0; i < 40; i++) {
      let mid = (end + begin) / 2;
      if (need(nums, mid) > 3) {
        begin = mid;
      } else {
        end = mid;
      }
    }

    return begin;
  }
}
