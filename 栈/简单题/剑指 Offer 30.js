// 这题难点在于如何使用 O(1) 的时间复杂度实现 min 函数，思路就是每次push和pop的时候维护一个辅助栈
// 保存当前的最小值。保证辅助栈的栈顶永远是栈的最小值

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = []
  this.size = 0
  this.minStack = []
  this.minIndex = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.data[this.size++] = x
  if (this.minIndex === -1 || this.minStack[this.minIndex] >= x) {
    this.minIndex++
    this.minStack[this.minIndex] = x
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const delValue = this.top()
  if (delValue === this.minStack[this.minIndex]) this.minIndex--
  this.data[--this.size] = undefined
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.size - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minStack[this.minIndex]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */