// 法1: 暴力解法，由于整个遍历的过程其实是封闭的（形成了一个环），因此只要不断的遍历数组并将每个元素减1直到目标元素为0即可
var timeRequiredToBuy = function (tickets, k) {
  let count = 0
  while (true) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i]) {
        tickets[i]--
        count++
        if (i === k && tickets[i] === 0) return count
      }
    }
  }
}

// 法2: 将数组由 k 分为两段，可知 [0, k] 的元素每个需要遍历的次数是元素大小和k位置元素大小的较小值，[k + 1, tickets.length - 1]的元素每个需要遍历的次数是元素大小和k位置元素大小减1的较小值
var timeRequiredToBuy = function (tickets, k) {
  let count = 0
  for (let i = 0; i <= k; i++) {
    count += Math.min(tickets[i], tickets[k])
  }
  for (let i = k + 1; i < tickets.length; i++) {
    count += Math.min(tickets[i], tickets[k] - 1)
  }
  return count
}