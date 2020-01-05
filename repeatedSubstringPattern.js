//Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
  /Example 1:
    //Input: "abab"
    //Output: True(It's the substring "ab" twice.)
    
    
var repeatedSubstringPattern = function(s) {
    if (s.length <=1) false;
    for (let i=1; i<= s.length / 2; i++) {
        if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s ) {
            return true
        }
    }
    return false;
};
