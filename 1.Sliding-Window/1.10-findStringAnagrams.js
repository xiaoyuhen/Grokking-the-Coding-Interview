/**
 * 
 * @param {String} str 
 * @param {String} pattern 
 */
function findStringAnagrams(str, pattern) {
  const map = new Map()
  const result = []

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
      result.push(start)
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

  return result
}

console.log(findStringAnagrams('ppqp', 'pq')) // true
console.log(findStringAnagrams('abbcabc', 'abc')) // false
