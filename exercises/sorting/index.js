// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        let current = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = current
        sorted = false
      }
    }
  }
  return arr
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      let oldValue = arr[i]
      arr[i] = arr[min]
      arr[min] = oldValue
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length/2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let results = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
