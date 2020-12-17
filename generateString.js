// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

var generateTheString = function (n) {
    if (n % 2 === 0) {
        return "a".repeat(n - 1) + "b";
    }
    
    return "a".repeat(n);
};