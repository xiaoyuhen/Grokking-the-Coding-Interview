/**
 * 
 * @param {Array} arr 
 * @return {Array}
 */
function makeSquares(arr) {
  let start = 0
  let end = arr.length - 1
  const result = []
  let higher = arr.length - 1

  while(start <= end) {
    const squareEnd = arr[end] * arr[end]
    const squareStart = arr[start] * arr[start]
    if (squareStart > squareEnd) {
      result[higher] = squareStart
      start++
    } else {
      result[higher] = squareEnd
      end--
    }
    higher--
  }

  return result
}

console.log(makeSquares([-2, -1, 0, 2, 3])) // [0, 1, 4, 4, 9]
console.log(makeSquares([-3, -1, 0, 1, 2])) // [0, 1, 1, 4, 9]
