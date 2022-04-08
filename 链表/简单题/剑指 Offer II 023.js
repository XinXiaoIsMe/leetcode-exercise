// 法1: 暴力解法
var getIntersectionNode = function (headA, headB) {
  const stack1 = []
  const stack2 = []
  let p = headA
  let q = headB
  while (p) {
    stack1.push(p)
    p = p.next
  }
  while (q) {
    stack2.push(q)
    q = q.next
  }
  let ret = null
  while (stack1.length && stack2.length) {
    if (stack1.at(-1) !== stack2.at(-1)) break
    ret = stack1.pop()
    stack2.pop()
  }

  return ret
}

// 法2: 使用map
var getIntersectionNode = function (headA, headB) {
  const map = new Map()
  let p = headA
  while (p) {
    map.set(p, 0)
    p = p.next
  }
  p = headB
  while (p) {
    if (map.has(p)) return p
    p = p.next
  }
  return null
}

// 法3: 利用双指针 当遍历完的时候跑到另一个链表的头部继续遍历，假设两个链表不重合的部分长度为a，b，重合部分为c
// 。则当遍历次数为 a + b + c 的时候两者会相遇，如下
// A: ---a----c
// B: -----b----c
// A的路径: ---a----c-----b
// B的路径: -----b----c---a
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null
  let pA = headA
  let pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}