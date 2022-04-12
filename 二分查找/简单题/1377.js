var kWeakestRows = function (mat, k) {
  const map = mat.map((item, index) => {
    return [index, item.reduce((pre, next) => pre + next)]
  })
  map.sort((a, b) => a[1] - b[1])
  return map.map(item => item[0]).slice(0, k)
}