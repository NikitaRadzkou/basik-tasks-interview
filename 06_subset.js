const arraySubset = (arr1, arr2) => {
  if (arr1.length < arr2.length) return false
  for (let i = 0; i < arr2.length; i++) {
    const index = arr1.indexOf(arr2[i])
    if (index === -1) {
      return false
    }
    delete arr1[index]
  }
  return true
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false
