// 法1: 暴力解法
var MovingAverage = function (size) {
  this.queen = new Array(size)
  this.size = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queen.length > this.size) {
    this.queen[this.size] = val
    this.size++
    return this.queen.reduce((pre, next) => pre + next) / this.size
  } else {
    this.queen.shift()
    this.queen.push(val)
    return this.queen.reduce((pre, next) => pre + next) / this.size
  }
}

// 法2: 实际不需要每次都遍历队列求和，使用一个变量保存即可
var MovingAverage = function (size) {
  this.queue = []
  this.sum = 0
  this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.sum += val
  if (this.queue.length === this.size) {
    this.sum -= this.queue.shift()
  }
  this.queue.push(val)
  return this.sum / this.queue.length
};