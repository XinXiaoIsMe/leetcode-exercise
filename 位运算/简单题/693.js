// 法1: 暴力解法
var hasAlternatingBits = function (n) {
  const stack = []
  const binaryStr = n.toString(2)
  stack.push(binaryStr[0])
  for (let i = 1; i < binaryStr.length; i++) {
    if (stack.at(-1) === binaryStr[i]) return false
    stack.push(binaryStr[i])
  }
  return true
}

// 法2: 普通解法
var hasAlternatingBits = function (n) {
  let binaryBit = -1
  while (n) {
    const binaryCode = n % 2
    if (binaryBit === binaryCode) return false
    binaryBit = binaryCode
    n = n >>> 1
  }
  return true
}

// 法3: 最优解，使用位运算。
// 1010... 右移一位 => 0101...
// 对它们进行按位异或，此时他们的对应位一定是相反的
// 1010
// 0101
// 1111
// 再将得到的结果加1，此时进一位，原来的位置全部为0
// 1111 + 1 = 10000
// 显然此时再将得到的结果和原来的数按位与将会得到0
var hasAlternatingBits = function (n) {
  const ret = n ^ (n >> 1)
  return ((ret + 1) & n) === 0 // 注意位运算的优先级很低
}
