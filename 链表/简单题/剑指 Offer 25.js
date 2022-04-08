// 法1: 遍历 l1，l2 ，每次取出其中的最小值
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  let head
  if (l1.val < l2.val) {
    head = l1
    l1 = l1.next
  } else {
    head = l2
    l2 = l2.next
  }
  let p = head
  while (l1 || l2) {
    if (l1 === null) {
      p.next = l2
      break
    } else if (l2 === null) {
      p.next = l1
      break
    } else if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  return head
}

// 法2: 利用递归
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}