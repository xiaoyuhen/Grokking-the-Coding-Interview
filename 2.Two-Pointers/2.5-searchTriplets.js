function searchTriplets(arr) {
  const newArr = arr.sort((a, b) => a - b)

  const triplets = []
  for (let i = 0; i < newArr.length; i++) {
    if (i > 0 && newArr[i] === newArr[i - 1]) {
      continue
    }

    searchPair(newArr, -arr[i], i + 1, triplets)
  }

  return triplets
}

function searchPair(arr, target, start, triplets) {
  let end = arr.length - 1
  while (start < end) {
    const sum = arr[start] + arr[end]
    if (sum === target) {
      triplets.push([arr[start], arr[end], -target])
      start++
      end--
      while (start < end && arr[start] === arr[start - 1]) {
        start++
      }

      while (start < end && arr[end] === arr[end + 1]) {
        end--
      }
    } else if (sum > target) {
      end--
    } else {
      start++
    }
  }
}

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2])) // [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
console.log(searchTriplets([-5, 2, -1, -2, 3])) // [[-5, 2, 3], [-2, -1, 3]]