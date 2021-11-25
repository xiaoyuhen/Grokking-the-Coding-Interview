function findMaxFruitCount(arr) {
  const basketNumber = 2

  const map = new Map()
  let start = 0
  let max = 0

  for (let end = 0; end < arr.length; end++) {
    const item = map.get(arr[end])
    map.set(arr[end], item ? item + 1: 1)

    while (map.size > basketNumber) {
      const item = map.get(arr[start])
      if (item > 1) {
        map.set(arr[start], item - 1)
      } else {
        map.delete(arr[start])
      }
      start++
    }
    max = Math.max(max, end - start + 1)
  }

  return max
}

console.log(findMaxFruitCount(['A', 'B', 'C', 'A', 'C']))  // 3
console.log(findMaxFruitCount(['A', 'B', 'C', 'B', 'B', 'C'])) // 5