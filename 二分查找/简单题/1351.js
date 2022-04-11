// 利用二分查找，找到gird的每项中最大的负数
var countNegatives = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    let l = 0
    let r = grid[i].length
    const gridItem = grid[i]
    while (l < r) {
      const mid = l + ((r - l) >>> 1)
      if (gridItem[mid] < 0) r = mid
      else l = mid + 1
    }
    count += (gridItem.length - l)
  }
  return count
}