// 法1: 暴力解法，将链表数据存放在数组中，通过头尾指针遍历数组一一比对
var isPalindrome = function (head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (arr[i] !== arr[j]) return false
    i++
    j--
  }
  return true
}

// 法2: 利用递归，首先使用全局变量 p 保存头指针，然后利用递归抵达链表尾部，在回溯的时候和p进行比较
// 实际和法1一样，不过将储存的部分利用递归完成
var p
var isPalindrome = function (head) {
  p = head
  return _isPalindrome(head)
};
function _isPalindrome(node) {
  if (node) {
    if (!_isPalindrome(node.next)) return false
    if (node.val !== p.val) return false
    p = p.next
    return true
  }

  return true
}

// 法3: 首先利用快慢指针得到链表中间元素，然后将链表后半部分翻转。比较链表前后部分
var isPalindrome = function (head) {
  let mid = getMiddle(head)
  let p = reverse(mid)
  mid = p
  let result = true
  while (p) {
    if (p.val !== head.val) {
      result = false
      break
    }
    p = p.next
    head = head.next
  }
  reverse(mid)
  return result
};

function reverse(head) {
  if (head === null || head.next === null) return head

  const reversedHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return reversedHead
}

function getMiddle(head) {
  let slow = head
  let fast = slow
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}