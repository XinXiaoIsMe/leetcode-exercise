// 法1: 暴力解法，使用对象存储数组中元素出现的次数
var majorityElement = function (nums) {
    const map = {}
    const limit = nums.length >>> 1
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) map[nums[i]]++
        else map[nums[i]] = 1
    }
    for (const key in map) {
        if (map[key] > limit) return key
    }
}

// 法2: 暴力解法，对数组进行排序，可知中位数就是需要的值
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums[nums.length >>> 1]
}

// 法3: 利用位运算。由于 javascript 中整数使用 32 位存储，
// 因此只要知道所有数组元素在每一位的众数然后拼接起来就是整个数组的众数
var majorityElement = function (nums) {
    let major = 0
    let limit = nums.length >>> 1
    for (let i = 0, mask = 1; i < 32; i ++, mask <<= 1) {
        let bitCount = 0
        for (let j = 0; j < nums.length; j ++) {
            if (nums[j] & mask) bitCount ++
            if (bitCount > limit) {
                major |= mask
                break
            }
        }
    }
    return major
}

// 解法4: 摩尔投票法，将数组中的每个元素看作一种类型，不同的类型相互抵消，这样最终剩下的类型即是结果
var majorityElement = function (nums) {
    let major = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i ++) {
        if (count === 0) major = nums[i]
        if (nums[i] === major) count ++
        else count --
    }
    return major
}