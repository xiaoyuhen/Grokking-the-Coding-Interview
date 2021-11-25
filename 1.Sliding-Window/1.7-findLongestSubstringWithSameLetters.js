/**
 * 
 * @param {String} str 
 * @param {Number} k
 * @return {Number}
 * Input: String="aabccbb", k=2
 * Output: 5
 */
function findLongestSubstringWithSameLetters(str, k) {
  const map = new Map()

  let start = 0
  let max = 0
  let maxSameLetter = 0

  for (let end = 0; end < str.length; end++) {
    const cStr = str[end]
    map.set(cStr, map.get(cStr) ? map.get(cStr) + 1 : 1)
    // keep track of the count of the maximum repeating letter in any window
  
    maxSameLetter = Math.max(maxSameLetter, map.get(cStr))
    while (end - start + 1 - maxSameLetter > k) {
      if (map.get(str[start]) === 1) {
        map.delete(str[start])
      } else {
        map.set(str[start], map.get(str[start]) - 1)
      }
      start++
    }
    max = Math.max(max, end - start + 1)
  }

  return max
}

console.log(findLongestSubstringWithSameLetters('aabccbb', 2)) // 5
console.log(findLongestSubstringWithSameLetters('abbcb', 1)) // 4
console.log(findLongestSubstringWithSameLetters('abccde', 1)) // 3