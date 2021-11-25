/**
 * 
 * @param {Array[number]} arr 
 * @param {number} k 
 * @return {Array[number]}
 * Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
 */
const findAverages = (arr, k) => {
  let start = 0
  let end = k - 1

  const result = []
  let carry = 0

  for (let i = 0; i <= end; i++) {
    carry += arr[i]
  }

  result.push(carry)

  while (end < arr.length - 1) {
    end++
    carry = carry - arr[start] + arr[end]
    start++

    result.push(carry)
  }

  return result.map(item => item / 5)
}
