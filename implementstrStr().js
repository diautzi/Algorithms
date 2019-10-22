/** Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
**/

var strStr = function(haystack, needle) {
    if (needle.length === 0 ) {
        return 0;
    }
    let i = 0;
    while ( haystack.length >0 && needle.length >0) {
        if(haystack.includes(needle)) {
            return haystack.indexOf(needle)
        }
        return -1
    }
    return -1
};
