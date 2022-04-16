// 法1: 暴力解法
var smallerNumbersThanCurrent = function (nums) {
  const ret = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) count++
    }
    ret.push(count)
  }
  return ret
}

// 法2: 先递减排序，然后通过二分查找找到大于当前元素的值的下标。则小于当前元素的值的个数就是数组长度减去这个下标
var smallerNumbersThanCurrent = function (nums) {
  const ret = []
  const copyNums = [...nums].sort((a, b) => b - a)
  for (let i = 0, len = nums.length; i < len; i++) {
    ret.push(len - binarySearch(copyNums, nums[i]))
  }
  return ret
};
// 查找nums中小于target的最大值的下标
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const min = left + ((right - left) >>> 1)
    if (nums[min] >= target) left = min + 1
    else right = min - 1
  }
  return left
}
