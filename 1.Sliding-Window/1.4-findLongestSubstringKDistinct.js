/**
 * 
 * @param {String} s 
 * @param {Number} k
 * @return {Number} 
 */
function findLongestSubstringKDistinct(s, k) {
  let start = 0
  let end = 0
  let max = 0

  const map = new Map()

  for (let end = 0; end < s.length; end++) {
    const item = map.get(s[end])
    map.set(s[end], item ? item + 1: 1)

    while (map.size > k) {
      const item = map.get(s[start])
      if (item > 1) {
        map.set(s[start], item - 1)
      } else {
        map.delete(s[start])
      }
      start++
    }
    max = Math.max(max, end - start + 1)
  }
  return max
}

console.log(findLongestSubstringKDistinct('araaci', 2))  // 4
console.log(findLongestSubstringKDistinct('araaci', 1))  // 2
console.log(findLongestSubstringKDistinct('cbbebi', 3))  // 5