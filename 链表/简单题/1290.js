// 法1: 暴力解法，使用栈
var getDecimalValue = function (head) {
  const stack = []
  let count = 0
  let ret = 0
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  while (stack.length) {
    ret += Math.pow(2, count) * stack.pop()
    count++
  }
  return ret
}

// 法2: 利用二进制左移， 例如：101 => 依次取 1 0 1，每次遍历的时候将结果左移一位再加上当前项，每次遍历结果分别为：
// 1
// 10
// 101
var getDecimalValue = function (head) {
  let ret = 0
  while (head) {
    ret = (ret << 1) + head.val
    head = head.next
  }
  return ret
}