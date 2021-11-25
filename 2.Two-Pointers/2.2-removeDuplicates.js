/**
 * 
 * @param {Array} arr 
 * @return {Number}
 */
function removeDuplicates(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr.length
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])) // 4
console.log(removeDuplicates([2, 2, 2, 11])) // 2