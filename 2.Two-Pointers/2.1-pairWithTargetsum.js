/**
 * 
 * @param {Array} arr 
 * @param {Number} target 
 * @return {Array}
 */
function pairWithTargetsum(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const sum = arr[start] + arr[end]
    if (sum === target) {
      return [start, end]
    } else if (sum > target) {
      end--
    } else {
      start++
    }
  }

  return null
}

console.log(pairWithTargetsum([1,2,3,4,6], 6))
console.log(pairWithTargetsum([2,5,9,11], 11))
