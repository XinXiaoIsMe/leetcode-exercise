// 法1: 暴力解法
var reverseList = function (head) {
  const stack = []
  let node = head
  while (node) {
    stack.push(node.val)
    node = node.next
  }
  node = head
  while (node) {
    node.val = stack.pop()
    node = node.next
  }
  return head
}

// 法2: 原地翻转(递归)
var reverseList = function (head) {
  if (head === null || head.next === null) return head
  const rightHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return rightHead
}

// 法3: 原地翻转(迭代)
var reverseList = function (head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}