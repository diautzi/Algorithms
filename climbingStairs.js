You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

/////////fibonaci solution/////////
var climbStairs = function(n) {
if(n < 3) return n;
var arr = [1,2]
for (let i = 2; i < n; i++) {
	arr[i] = arr[i-1] + arr[i-2]
}
return arr[n-1]
    
};

///////Second solution//////////
var climbStairs = function(n) {
    var result = 0;
    if(n < 3) return n;
    var prePre = 1;
    var pre = 2;
    for(var i = 2; i < n; i++){
        result = prePre + pre;
        prePre = pre;
        pre = result;
    }
    return result;
};
