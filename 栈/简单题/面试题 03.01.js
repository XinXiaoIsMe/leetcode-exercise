// 这题其实很简单，就是使用一个数组，数组里面放三个栈。然后给每个栈编个号(0, 1, 2),剩下的就是基础的栈操作

/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
  this.stack = Array.from({ length: 3 }, () => [])
  this.stackSize = stackSize
};

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
  if (this.stack[stackNum].length === this.stackSize) return

  this.stack[stackNum].push(value)
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
  if (this.isEmpty(stackNum)) return -1

  return this.stack[stackNum].pop()
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
  if (this.isEmpty(stackNum)) return -1

  return this.stack[stackNum].at(-1)
};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
  return this.stack[stackNum].length === 0
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */