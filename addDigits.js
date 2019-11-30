//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//Example:

//Input: 38
//Output: 2 
//Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             //Since 2 has only one digit, return it.
             
             
var addDigits = function(num) {
    let arr = num.toString().split("")
    return arr.length === 1 ? 
        num : 
        addDigits(arr.reduce((a, b) => parseInt(a) + parseInt(b)))
};              
