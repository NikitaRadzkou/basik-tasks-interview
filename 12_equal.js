const deepEqual = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) return true
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (a instanceof RegExp && b instanceof RegExp)
    return a.toString() === b.toString()
  if (a instanceof Object && b instanceof Object) {
    if (Object.keys(a).length !== Object.keys(b).length) return false
    for (let key in a) {
      if (!b.hasOwnProperty(key)) return false
      if (!deepEqual(a[key], b[key])) return false
    }
    return true
  }
  return false
}

const source = { a: 1, b: { c: 1 } }
const test1 = { a: 1, b: { c: 1 } }
const test2 = { a: 1, b: { c: 2 } }
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true
