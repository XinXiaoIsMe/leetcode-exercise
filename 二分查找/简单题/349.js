// 法1: 暴力解法
var intersection = function (nums1, nums2) {
  const ret = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) ret.push(nums1[i])
    }
  }
  return [...new Set(ret)]
}

// 法2: 利用哈希表
var intersection = function (nums1, nums2) {
  const ret = new Set()
  const set = new Set()
  nums1.forEach(n => set.add(n))
  nums2.forEach(n => {
    if (set.has(n) && !ret.has(n)) ret.add(n)
  })
  return [...ret]
}