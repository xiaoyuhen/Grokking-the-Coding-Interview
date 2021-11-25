/**
 * 
 * @param {String} str
 * @return {Number} 
 * input aabccbb
 * ouput 3
 */
function findNoRepeatSubstring(str) {
  let start = 0
  let max = 0
  const map = new Map()

  for (let end = 0; end < str.length; end++) {
    const item = str[end]

    map.set(item, map.get(item) ? map.get(item) + 1 : 1)
    while (map.get(item) > 1) {
      map.set(str[start], map.get(str[start]) - 1)
      start++
    }

    max = Math.max(max, end - start + 1)
  }

  return max
}

console.log(noRepeatSubstring('aabccbb')) // 3
console.log(noRepeatSubstring('abbbb')) // 2
console.log(noRepeatSubstring('abccde')) // 3