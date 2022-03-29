// 核心在于利用栈和队列相反的存取值顺序，使用一个栈充当队列头部，另一个栈充当队列尾部
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.pushStack = []
  this.popStack = []
  this.top = null // 保存 pushStack 的栈底，如果 popStack 为空，则毫无疑问它就是队列的头部
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.pushStack.length === 0) this.top = x
  this.pushStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.popStack.length) return this.popStack.pop()

  while (this.pushStack.length) this.popStack.push(this.pushStack.pop())
  return this.popStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.popStack.length) return this.popStack.at(-1)
  else return this.top
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.pushStack.length === 0 && this.popStack.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */