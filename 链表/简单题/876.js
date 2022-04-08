// 法1: 暴力解法
var middleNode = function (head) {
  let p = head
  let count = 0
  while (p) {
    count++
    p = p.next
  }
  p = head
  for (let i = 0; i < (count >>> 1); i++) {
    p = p.next
  }
  return p
}

// 法2: 快慢指针
var middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}