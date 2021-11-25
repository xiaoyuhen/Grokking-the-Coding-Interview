/**
 * 
 * @param {String} str 
 * @param {String} pattern 
 */
function findSmallestSubstring(str, pattern) {
  let start = 0
  let subStringStart = 0
  let maxStrLength = 0
  let minLength = str.length + 1

  const map = new Map()

  for (let i = 0; i < pattern.length; i++) {
    const item = pattern[i]
    map.set(item, map.get(item) ? map.get(item) + 1 : 1)
  }

  for (let end = 0; end < str.length; end++) {
    const item = str[end]
    if (map.has(item)) {
      map.set(item, map.get(item) - 1)
      if (map.get(item) >= 0) {
        maxStrLength++
      }
    }

    while (maxStrLength === pattern.length) {
      if (minLength > end - start + 1) {
        minLength = end - start + 1
        subStringStart = start
      }

      const item = str[start]
      start++
      if (map.has(item)) {
        if (map.get(item) === 0) {
          maxStrLength--
        }
        map.set(item, map.get(item)+1)
      }
    }
  }

  if (minLength > str.length) return ''

  return str.substring(subStringStart, subStringStart + minLength)
}

console.log(findSmallestSubstring('aabdec', 'abc')) // 'abdec'
console.log(findSmallestSubstring('abdabca', 'abc')) // 'abc'
console.log(findSmallestSubstring('adcad', 'abc')) // ''