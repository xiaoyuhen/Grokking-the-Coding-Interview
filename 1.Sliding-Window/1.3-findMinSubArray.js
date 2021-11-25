/**
 * 
 * @param {Array[number]} arr 
 * @param {Number} s 
 * @return {Number}
 * Time Complexity O(N)
 * Space Complexity O(1)
 * Check if the current window length is the smallest so far, and if so, remember its length.
 * Subtract the first element of the window from the running sum to shrink the sliding window.
 */
function findMinSubArray(arr, s) {
  let start = 0
  let end = 0
  let carry = 0
  let min = arr.length + 1

  while (end < arr.length) {
    carry += arr[end]
    if (carry >= s) {
      min = Math.min(min, end - start + 1)

      while (carry >= s) {
        carry -= arr[start]

        min = Math.min(min, end - start + 1)
        start++
      }
    }
    end++
  }

  return min
}

findMinSubArray([2, 1, 5, 2, 3, 2], 7)
findMinSubArray([2, 1, 5, 2, 8], 7)
findMinSubArray([3, 4, 1, 1, 6], 8)