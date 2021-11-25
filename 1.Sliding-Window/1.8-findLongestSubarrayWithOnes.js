/**
 * 
 * @param {Array} arr 
 * @param {Number} k
 * @return {Number} 
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 */
function findLongestSubarrayWithOnes(arr, k) {
  let start = 0
  let max = 0
  let maxReplacementNumLength = 0

  for (let end = 0; end < arr.length; end++) {
    const item = arr[end]
    if (item === 0) {
      // keep track of the maximum number of repeating 1s in the current window
      maxReplacementNumLength++
    }

    while (maxReplacementNumLength > k) {
      if (arr[start] === 0) {
        maxReplacementNumLength--
      }
      start++
    }

    max = Math.max(max, end - start + 1)
  }

  return max
}

console.log(findLongestSubarrayWithOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)) // 6
console.log(findLongestSubarrayWithOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)) // 9


