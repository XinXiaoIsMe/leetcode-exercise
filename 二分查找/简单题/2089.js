// 法1: 暴力解
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b)
  return nums.reduce((pre, next, index) => {
    if (target === next) pre.push(index)
    return pre
  }, [])
}

// 法2: 遍历找出小于 target 的元素数量lt和大于 target 的元素数量gt，如果lt+gt等于数组长度，则可知结果为[]
// 否则结果是[lt, lt + 1, ... , nums.length - gt - 1]
var targetIndices = function (nums, target) {
  let ct = 0
  let gt = 0
  const ret = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) ct++
    else if (nums[i] > target) gt++
  }
  for (let i = ct, len = nums.length - gt; i < len; i++) {
    ret.push(i)
  }
  return ret
}