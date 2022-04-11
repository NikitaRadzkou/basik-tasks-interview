const search = (array, value) => {
  let start = 0
  let end = array.length - 1
  let middle = Math.floor((start + end) / 2)
  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  return array[middle] === value ? middle : -1
}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1
