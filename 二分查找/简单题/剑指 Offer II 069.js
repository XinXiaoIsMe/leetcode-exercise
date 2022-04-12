// 法1: 暴力解法
var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) return i
  }
}

// 法2: 利用二分查找
var peakIndexInMountainArray = function (arr) {
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    const mid = l + ((r - l) >>> 1)
    if (arr[mid] < arr[mid + 1]) l = mid + 1
    else r = mid
  }
  return l
}