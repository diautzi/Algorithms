// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

// solution 1
let sortArrayByParity = function(a) {
      return a.sort((a,b) => (a%2)-(b%2))
};

// solution 2 
var sortArrayByParity = function(A) {
    let evens = [];
    for ( let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0 ) {
            evens.unshift(A[i])
        }
        else evens.push(A[i])
    };
    return evens;
};
