var findTheDistanceValue = function (arr1, arr2, d) {
  return arr1.reduce((ret, n1) => {
    if (arr2.every(n2 => Math.abs(n2 - n1) > d)) ret++
    return ret
  }, 0)
}