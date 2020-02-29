//Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

var smallestRangeI = function(A, K) {
    let min = Math.min(...A) + K;
    let max = Math.max(...A) - K;
    
    if(max < min){return 0}
	
    return max - min;  
};
