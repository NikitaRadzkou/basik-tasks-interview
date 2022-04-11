const isAllAnagrams = arr => {
  const sorted = arr.map(el => el.split('').sort().join(''))
  return sorted.every((el, i) => el === sorted[0])
}

console.log(isAllAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(isAllAnagrams(['abcd', 'bdXc', 'cabd'])) // false
