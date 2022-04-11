const isBalanced = str => {
  const stack = []
  const open = ['(', '[', '{']
  const close = [')', ']', '}']
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (open.includes(char)) {
      stack.push(char)
    } else if (close.includes(char)) {
      const last = stack.pop()
      if (map[last] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
