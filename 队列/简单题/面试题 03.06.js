
var AnimalShelf = function () {
  this.cats = []
  this.dogs = []
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
  if (animal[1] === 0) this.cats.push(animal)
  else this.dogs.push(animal)
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
  if (this.cats.length && this.dogs.length) {
    if (this.cats[0][0] < this.dogs[0][0]) return this.cats.shift()
    else return this.dogs.shift()
  } else if (this.cats.length) {
    return this.cats.shift()
  } else if (this.dogs.length) {
    return this.dogs.shift()
  } else {
    return [-1, -1]
  }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
  if (this.dogs.length === 0) return [-1, -1]
  return this.dogs.shift()
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
  if (this.cats.length === 0) return [-1, -1]
  return this.cats.shift()
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */