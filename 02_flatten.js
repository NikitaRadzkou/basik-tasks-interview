const flatten = arr => {
  // decision 1
  // return arr.reduce((acc, curr) => {
  //   if (Array.isArray(curr)) {
  //     return acc.concat(flatten(curr))
  //   } else {
  //     return acc.concat(curr)
  //   }
  // }, [])

  // decision 2
  // const newArr = []
  // arr.map(item => {
  //   if (Array.isArray(item)) {
  //     newArr.push(...flatten(item))
  //   } else {
  //     newArr.push(item)
  //   }
  // })
  // return newArr

  // decision 3
  return arr.flat(Infinity)
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
