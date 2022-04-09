// 法1: 使用哈希表
var removeDuplicateNodes = function (head) {
  if (head === null) return head
  const set = new Set([head.val])
  let p = head
  while (p.next) {
    if (set.has(p.next.val)) {
      p.next = p.next.next
    } else {
      p = p.next
      set.add(p.val)
    }
  }
  return head
}

// 法2: 利用双重循环
var removeDuplicateNodes = function (head) {
  if (head === null) return head
  let p = head
  while (p) {
    let q = p
    while (q.next) {
      if (q.next.val === p.val) {
        q.next = q.next.next
      } else {
        q = q.next
      }
    }
    p = p.next
  }
  return head
}