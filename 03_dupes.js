const removeDupes = str => {
  // decision 1
  // const res = []
  // const map = {}
  // for (let i = 0; i < str.length; i++) {
  //   if (!map[str[i]]) {
  //     map[str[i]] = true
  //     res.push(str[i])
  //   }
  // }
  // return res.join('')

  // decision 2
  // return str
  //   .split('')
  //   .filter((item, index, arr) => arr.indexOf(item) === index)
  //   .join('')

  // decision 3
  return Array.from(new Set('abca')).join('')
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
