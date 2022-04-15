var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceCount = aliceSizes.reduce((n1, n2) => n1 + n2)
  const bobCount = bobSizes.reduce((n1, n2) => n1 + n2)
  const target = (aliceCount + bobCount) / 2
  const n = target - aliceCount
  const map = {}
  for (let i = 0; i < aliceSizes.length; i++) {
    map[n + aliceSizes[i]] = aliceSizes[i]
  }
  for (let j = 0; j < bobSizes.length; j++) {
    if (bobSizes[j] in map) return [map[bobSizes[j]], bobSizes[j]]
  }
}