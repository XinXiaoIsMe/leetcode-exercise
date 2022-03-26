// 利用位运算的 异或运算符 的特性：
// 1. a ^ 0 = a
// 2. a ^ a = 0
// 由上述规律可知只需将所有元素进行异或操作即可(相同的元素会相互抵消掉，最终剩下所需要的值)
var singleNumber = function(nums) {
    return nums.reduce((pre, next) => pre ^ next)
}