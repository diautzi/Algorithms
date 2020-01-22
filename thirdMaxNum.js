//Given a non-empty array of integers, return the third maximum number in this array
//If it does not exist, return the maximum number

var thirdMax = function(nums) {
  nums = [...new Set(nums)]
    console.log(nums)
    if (nums.length >= 3) {
        nums = nums.sort((a, b) => b-a)
        return nums[2]
    }
    else 
        return Math.max(...nums)
}
