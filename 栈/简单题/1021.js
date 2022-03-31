// 这题和 1614 题类似
var removeOuterParentheses = function (s) {
  let ret = ''
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (stack.length > 0) ret += '('
      stack.push('(')
    } else if (s[i] === ')') {
      stack.pop()
      if (stack.length > 0) ret += ')'
    }
  }

  return ret
}

// 同样，这题也不需要使用一个栈
var removeOuterParentheses = function (s) {
  let ret = ''
  let size = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (size > 0) ret += '('
      size++
    } else if (s[i] === ')') {
      size--
      if (size > 0) ret += ')'
    }
  }

  return ret
}