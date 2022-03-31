// 这题其实很简单，主要通过一个栈保存左括号，当碰到右括号的时候记录此时栈的深度并pop，取每次栈的深度的最大值即可
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let dep = 0
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else if (s[i] === ')') {
      dep = Math.max(dep, stack.length)
      stack.pop()
    }
  }
  return dep
}

// 实际只需要记录栈的深度，因此使用一个变量即可
var maxDepth = function (s) {
  let dep = 0
  let size = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      size++
    } else if (s[i] === ')') {
      dep = Math.max(dep, size)
      size--
    }
  }
  return dep
}