/**
 * 
 * @param {Array[number]} arr 
 * @param {Number} k 
 * Time Complexity O(n)
 * Space Complexity O(n)
 * Subtract the element going out of the sliding window i.e., subtract the first element of the window.
 * Add the new element getting included in the sliding window i.e., the element coming right after the end of the window.
 */
function findMaxSubArray(arr, k) {
  let start = 0
  let end = k

  let max = 0
  let windowSum = 0

  for (let i = 0; i < end; i++) {
    max += arr[i]
    windowSum += arr[i]
  }

  while (end < arr.length) {
    windowSum = windowSum - arr[start] + arr[end]

    max = Math.max(windowSum, max)

    start++
    end++
  }

  return max
}