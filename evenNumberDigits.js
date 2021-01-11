// Given an array nums of integers, return how many of them contain an even number of digits.
// Example:
    // Input: nums = [12, 345, 2, 6, 7896]
    // Output: 2

const findNumbers = function(nums) {
    let count = 0;
    let numsArraysLength = nums.map ( array => array.toString().length)
    numsArraysLength.map(a => {
        if (a % 2 === 0) {
            count += 1;
        }
    });
    return count;
};

