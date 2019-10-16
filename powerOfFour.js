/** Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true **/

var isPowerOfFour = function(num) {
    if ( num == 0) return false 
    while ( num % 4 == 0 ) {
        num /= 4
    }
    return num == 1
};
