const highestFrequency = arr => {
  let obj = {}
  let max = 0
  let maxKey = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(obj)
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      maxKey = key
    }
  }
  return maxKey
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
) // -> ghi
