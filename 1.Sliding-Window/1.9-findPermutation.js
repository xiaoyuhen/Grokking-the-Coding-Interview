/**
 * 
 * @param {String} str 
 * @param {String} pattern 
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 */
function findPermutation(str, pattern) {
  const map = new Map()

  for (let i = 0; i < pattern.length; i++) {
    map.set(pattern[i], map.get(pattern[i]) ? map.get(pattern[i]) + 1 : 1)
  }

  let start = 0
  let matchStrLength = 0

  for (let end = 0; end < str.length; end++) {
    const item = str[end]
    if (map.has(item)) {
      map.set(item, map.get(item) - 1)
      if (map.get(item) === 0) {
        matchStrLength++
      }
    }

    if (matchStrLength === map.size) {
      return true
    }

    while (end - start >= pattern.length - 1) {
      const item = str[start]
      start++
      if (map.has(item)) {
        if (map.get(item) === 0) {
          matchStrLength--
        }
        map.set(item, map.get(item)+1)
      }
    }
  }

  return false
}

console.log(findPermutation('oidbcaf', 'abc')) // true
console.log(findPermutation('odicf', 'dc')) // false
console.log(findPermutation('bcdxabcdy', 'bcdyabcdx')) // true
console.log(findPermutation('aaacb', 'abc')) // true
console.log(findPermutation('abbcabc', 'abc')) // true
console.log(findPermutation('ppq', 'pq')) // true
console.log(findPermutation('aaqp', 'pq')) // true
console.log(findPermutation('ddc', 'dc')) // true
console.log(findPermutation('dc', 'dc')) // true
console.log(findPermutation('dac', 'dc')) // false
