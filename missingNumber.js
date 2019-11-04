// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2

var missingNumber = function(nums) {
    for( let i=0; i<=nums.length; i++) {
        if(!nums.includes(i)) {
            return i;
        }
    }
}

// var missingNumber = function(nums) {
//   nums =  nums.sort((a,b) => a - b);
//   let len = nums.length;

//   for(var i=0; i <= len; ++i)
//     if(i != nums[i]) return i;
// }
