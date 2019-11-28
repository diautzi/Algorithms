//Write a program to check whether a given number is an ugly number.

//Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

//Example:

//Input: 6
//Output: true
//Explanation: 6 = 2 × 3


var isUgly = function(num) {
      if(num === 0) {
        return false;
    }
    
    while(true) {
        if(num % 2 === 0) {
            num /= 2;
        } else if(num % 3 === 0) {
            num /= 3;
        } else if(num % 5 === 0) {
            num /= 5
        } else if(num === 1) {
            return true;
        } else {
            return false;
        }
    }
};
