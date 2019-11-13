// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

 

// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

/////////////////////////////

var fib = function(N) {
  let arr = [0,1];
  for (var i = 2; i <= N; i++) {
      arr[i] = arr[i -1] + arr[i - 2]; 
  }
  return arr[N];
};
