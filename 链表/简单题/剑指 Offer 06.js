// 法1: 暴力解
var reversePrint = function (head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr.reverse()
}

// 法2: 利用递归
var reversePrint = function (head) {
  const arr = []
  reverseList(head, arr)
  return arr
};
function reverseList(node, arr) {
  if (node === null) return
  reverseList(node.next, arr)
  arr.push(node.val)
}

// 法3: 利用栈
var reversePrint = function (head) {
  const stack = []
  const ret = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  while (stack.length) {
    ret.push(stack.pop())
  }
  return ret
}

// 法4: 和法1相同，只是数组原地翻转
var reversePrint = function (head) {
  const ret = []
  while (head) {
    ret.push(head.val)
    head = head.next
  }
  for (let i = 0, j = ret.length - 1; i < j; i++, j--) {
    [ret[i], ret[j]] = [ret[j], ret[i]]
  }
  return ret
}

// 法5: 先翻转链表再依次取出（非递归翻转链表）
var reversePrint = function (head) {
  const ret = []
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  head = pre
  while (head) {
    ret.push(head.val)
    head = head.next
  }
  return ret
}

// 法6: 先翻转链表再依次取出（递归翻转链表）
var reversePrint = function (head) {
  const ret = []
  head = reverseLinkList(head)
  while (head) {
    ret.push(head.val)
    head = head.next
  }
  return ret
};
function reverseLinkList(head) {
  if (head === null || head.next === null) return head
  const ret = reverseLinkList(head.next)
  head.next.next = head
  head.next = null
  return ret
}