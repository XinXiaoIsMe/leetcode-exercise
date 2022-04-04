var RecentCounter = function () {
  this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const start = t - 3000
  while (this.requests.length && this.requests[0] < start) this.requests.shift()
  this.requests.push(t)
  return this.requests.length
}