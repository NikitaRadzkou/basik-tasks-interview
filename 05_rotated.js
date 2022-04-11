const isStringRotated = (str1, str2) => {
  // decision 1
  if (str1.length !== str2.length) return false
  const str1Concat = str1 + str1
  return str1Concat.includes(str2)

  // decision 2
  return str1.length === str2.length && (str1 + str1).includes(str2)
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
