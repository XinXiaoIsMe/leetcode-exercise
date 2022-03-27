// 法1: 利用栈后进先出的特点
var reversePrint = function (head) {
  const s1 = []
  const s2 = []
  while (head !== null) {
    s1.push(head.val)
    head = head.next
  }
  while (s1.length) s2.push(s1.pop())
  return s2
}

// 法2: 利用递归，先遍历到链表尾巴，然后回溯的过程中将元素push进数组
var reversePrint = function (head) {
  const arr = []
  reverse(head, arr)
  return arr
}
function reverse(head, arr) {
  if (head === null) return

  reverse(head.next, arr)
  arr.push(head.val)
}