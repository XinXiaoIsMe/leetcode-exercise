// 法1: 暴力解法
var specialArray = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= i) count++
    }
    if (count === i) return i
  }
  return -1
}

// 法2: 利用二分查找。首先将数组递减排序，假设数组长度为len，依次从0遍历到len，利用二分查找找出数组中小于当前
// 遍历值的元素中最大值的下标，判断其是否等于当前遍历值
var specialArray = function (nums) {
  nums.sort((a, b) => b - a)
  for (let i = 0; i <= nums.length; i++) {
    if (binarySearch(nums, i) === i) return i
  }
  return -1
};
// 查找数组中小于target的最大值
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = left + ((right - left) >>> 1)
    if (arr[mid] < target) right = mid - 1
    else left = mid + 1
  }
  return left
}

// 法3: 找规律。首先将数组递增排序，然后假设nums[i]为最终结果，则其必定满足以下条件：
// 1. nums[i] >= nums.length - i
// 2. i === 0 || nums[i - 1] < nums.length - i
var specialArray = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] >= len - i && (i === 0 || nums[i - 1] < len - i)) return len - i
  }
  return - 1
}