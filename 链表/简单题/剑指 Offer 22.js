// 法1: 暴力解法
var getKthFromEnd = function (head, k) {
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
  return node
}

// 法2: 利用快慢指针
var getKthFromEnd = function (head, k) {
  let fast = head
  let slow = head
  while (k--) fast = fast.next
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}