// add fibonacci numbers to the array
const fibonacci = n => {
  let fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

console.log(fibonacci(1)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
