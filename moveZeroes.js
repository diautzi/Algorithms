/** Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations. **/

var moveZeroes = function(nums) {       
    for(let i=nums.length; i--;) {
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
};
