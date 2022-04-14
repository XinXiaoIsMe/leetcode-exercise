// 法1: 利用map
var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) return [nums[i], map[nums[i]]]
    else map[target - nums[i]] = nums[i]
  }
}

// 法2: 利用双指针，参考二分查找的思想，当两个指针所指的元素之和小于target的时候左指针移动，大于target的时候
// 右指针移动。直到找到结果或者指针碰撞时停止
var twoSum = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === target) return [nums[left], nums[right]]
    else if (sum < target) left++
    else right--
  }
}