// 法1: 暴力解法 使用count记录有几个学生不能吃当前的三明治，每次判断students的第一个元素是否等于sandwiches的第一个元素，
// 如果相等则shift，count初始化为0，否则，count加1，如果count等于学生数量则说明剩下的学生都吃不到三明治了。
var countStudents = function (students, sandwiches) {
  let count = 0
  while (sandwiches.length) {
    if (students[0] === sandwiches[0]) {
      count = 0
      students.shift()
      sandwiches.shift()
    } else {
      students.push(students.shift())
      count++
      if (count === students.length) return students.length
    }
  }

  return 0
}

// 法2: 实际不需要关注学生的顺序，因为学生的顺序是不断调整的，每个学生都有机会查看当前三明治。因此需要注意的是三明治
// 的数量和顺序。首先使用一个数组分别保存喜欢圆形和方形的三明治的学生数量，然后遍历三明治数组，判断当前三明治有没有学生
// 喜欢吃，如果有则当前喜欢此三明治的学生走开了，对应的喜欢此三明治的学生数量减1，如果没有学生喜欢吃此三明治，则遍历结束
// 返回剩余的三明治的数量
var countStudents = function (students, sandwiches) {
  const counts = [0, 0]
  for (let i = 0; i < students.length; i++) {
    counts[students[i]]++
  }
  for (let i = 0, len = sandwiches.length; i < len; i++) {
    const sandwich = sandwiches[i]
    if (counts[sandwich]) counts[sandwich]--
    else return len - i
  }
  return 0
}