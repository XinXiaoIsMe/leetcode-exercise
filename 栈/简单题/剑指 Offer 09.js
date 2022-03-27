// 法1: 暴力解法，主要考虑删除的时候，栈和队列的顺序是相反的，因此利用一个辅助栈来颠倒顺序，每次删除后还原原来的栈
var CQueue = function () {
  this.appendStack = []
  this.deleteStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.appendStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.appendStack.length === 0) return -1

  while (this.appendStack.length) this.deleteStack.push(this.appendStack.pop())
  const ret = this.deleteStack.pop()
  while (this.deleteStack.length) this.appendStack.push(this.deleteStack.pop())
  return ret
};

// 法2: 主要优化 deleteHead 函数。每次只要保证辅助栈不为空即可删除元素，如果辅助栈为空，则将储存数据的栈中元素push进辅助栈

var CQueue = function () {
  this.appendStack = []
  this.deleteStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.appendStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.deleteStack.length) return this.deleteStack.pop()

  if (this.appendStack.length === 0) return -1
  while (this.appendStack.length) this.deleteStack.push(this.appendStack.pop())
  return this.deleteStack.pop()
}