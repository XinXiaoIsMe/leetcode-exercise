var maxProductDifference = function (nums) {
  let max1 = Math.max(nums[0], nums[1])
  let max2 = Math.min(nums[0], nums[1])
  let min1 = Math.min(nums[0], nums[1])
  let min2 = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1
      max1 = nums[i]
    } else if (nums[i] > max2) {
      max2 = nums[i]
    }
    if (nums[i] < min1) {
      min2 = min1
      min1 = nums[i]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }
  }
  return max1 * max2 - min1 * min2
}