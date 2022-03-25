// 法1: 暴力解法，直接取出 0 放在数组末尾
var moveZeroes = function (nums) {
    for (let i = 0, count = 0; i < nums.length - count; i ++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            i --
            count ++
        }
    }
}

// 法2: 暴力解法，利用队列，将所有值为 0 的元素下标存起来，然后将 非0元素 填充进去
var moveZeroes = function (nums) {
    const queue = []
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0) {
            queue.push(i)
        } else if (queue.length > 0) {
            const index = queue.shift()
            nums[index] = nums[i]
            nums[i] = 0
            queue.push(i)
        }
    }
}

// 法3: 利用两个指针，第一个指针用于遍历数组，另一个指针用于转移 非0数据 到数组开头
var moveZeroes = function (nums) {
    let i = 0
    let j = 0
    while (i < nums.length) {
        if (nums[i]) nums[j ++] = nums[i]
        i ++
    }
    while (j < nums.length) {
        nums[j ++] = 0
    }
}

// 法4: 利用两个指针 left 和 right，[left, right - 1] 的区域全部为 0，遍历数组并维护这个区域
var moveZeroes = function (nums) {
    let left = 0
    let right = 0
    while (right < nums.length) {
        if (nums[right]) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left ++
        }
        right ++
    }
}