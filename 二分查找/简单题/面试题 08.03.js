var findMagicIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) return nums[i]
  }
  return -1
}