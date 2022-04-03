// 法1: 暴力解法
var nextGreaterElement = function (nums1, nums2) {
  const ret = []
  nums1.forEach(n1 => {
    const index = nums2.findIndex(n2 => n2 === n1)
    ret.push(nums2.slice(index).find(n2 => n2 > n1) || -1)
  })
  return ret
}

// 法2: 使用单调栈。逆序遍历nums2，使用一个栈，每次遍历到nums2中的元素num的时候，将小于等于num的栈中元素弹出。此时就保证了
// 栈顶元素一定是大于num，也就是num右侧第一个大于num的值。使用map缓存这个值。再将num推入栈。当遍历完nums2的时候，map中就缓存了
// nums2中每个元素符合题目条件的值。因为nums1是nums2的子集，因此所有nums1中元素的符合题意的结果都已经缓存在了map中
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map()
  const stack = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]
    while (stack.length && stack.at(-1) <= num) stack.pop()
    map.set(num, stack.length === 0 ? -1 : stack.at(-1))
    stack.push(num)
  }
  return nums1.map(n => map.get(n))
}