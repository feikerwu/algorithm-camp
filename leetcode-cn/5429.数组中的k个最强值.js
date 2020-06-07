/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  arr = arr.sort((a, b) => a - b)
  const median = arr[Math.floor((arr.length - 1) / 2)]
  // console.log({median})
  let start = 0, end = arr.length - 1
  const res = []

  console.log(arr)

  while (k--) {
    const startAbs = Math.abs(arr[start] - median)
    const endAbs = Math.abs(arr[end] - median)
    console.log({
      startAbs,
      endAbs
    })
    if (startAbs <= endAbs) {
      res.push(arr[end])
      end--
    } else {
      res.push(arr[start])
      start++
    }
  }
  // console.log(res)
  return res
};

// getStrongest([-7,22,17,3], 2)