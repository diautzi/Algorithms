//Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i]
//We repeat this process K times in total.  
//We may choose the same index i multiple times.
//Return the largest possible sum of the array after modifying it in this way.


var largestSumAfterKNegations = function(A, K) {
    for (let i= 0; i < K; i++ ) {
        A[A.indexOf(Math.min(...A))]*=-1
    }
    
    sum=0
    for (let i=0; i < A.length; i++ ) {
        sum += A[i]
    }
    return sum
};
