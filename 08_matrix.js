const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const print = arr => {
  arr.forEach(i => {
    console.log(i)
  })
}

const rotateMatrix = source => {
  // decision 1
  // const n = matrix.length
  // for (let layer = 0; layer < n / 2; layer++) {
  //   let first = layer
  //   let last = n - 1 - layer
  //   for (let i = first; i < last; i++) {
  //     let offset = i - first
  //     let top = matrix[first][i]
  //     matrix[first][i] = matrix[last - offset][first]
  //     matrix[last - offset][first] = matrix[last][last - offset]
  //     matrix[last][last - offset] = matrix[i][last]
  //     matrix[i][last] = top
  //   }
  // }
  // return matrix
  //
  // decision 2
  const newMatrix = source[0].map(() => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j]
    }
  }

  return newMatrix
}

const rotateMatrix180 = source => {
  return rotateMatrix(rotateMatrix(source))
}

console.log(print(rotateMatrix(matrix)))
console.log(print(rotateMatrix180(matrix)))
