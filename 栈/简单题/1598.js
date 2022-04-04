var minOperations = function (logs) {
  let count = 0
  for (let i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case './':
        break
      case '../':
        count && count--
        break
      default:
        count++
        break
    }
  }
  return count
}