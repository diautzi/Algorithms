//Count the number of prime numbers less than a non-negative number, n

//Example:

//Input: 10
//Output: 4
//Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


var countPrimes = function(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) {
          count++;  
        } 
    }
    return count;
        
};


let isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
};
