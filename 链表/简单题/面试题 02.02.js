// 法1: 暴力解法
var kthToLast = function (head, k) {
  let node = head
  let length = 0
  while (node) {
    length++
    node = node.next
  }
  node = head
  for (let i = 0; i < length - k; i++) {
    node = node.next
  }
  return node.val
}

// 法2: 双指针
var kthToLast = function (head, k) {
  let fast = head
  let slow = head
  while (fast && k--) fast = fast.next
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow.val
}