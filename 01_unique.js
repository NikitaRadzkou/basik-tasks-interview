const isUnique = str => {
  // decision 1
  // const strArr = str.split('')
  // const strObj = {}
  // for (let i = 0; i < strArr.length; i++) {
  //   if (strObj[strArr[i]]) {
  //     return false
  //   }
  //   strObj[strArr[i]] = true
  // }
  // return true

  // decision 2
  // const set = new Set()

  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i]

  //   if (set.has(char)) {
  //     return false
  //   }
  //   set.add(char)
  // }
  // return true

  // decision 3
  return new Set(str).size === str.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
