// 法1: 暴力解法
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i]
  }
  return ' '
}

// 法2: 利用哈希表（无序）
var firstUniqChar = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++
    else map[s[i]] = 1
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return s[i]
  }
  return ' '
}

// 法3: 利用哈希表（有序）
var firstUniqChar = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], 1)
    else map.set(s[i], 0)
  }
  for (const [key, value] of map) {
    if (value === 0) return key
  }

  return ' '
}

// 法4: 利用数组保存
var firstUniqChar = function (s) {
  // 利用数组保存字符出现次数
  const countArr = []
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    if (countArr[index]) countArr[index]++
    else countArr[index] = 1
  }
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    if (countArr[index] === 1) return s[i]
  }
  return ' '
}