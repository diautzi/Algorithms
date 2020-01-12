// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.


let sortArrayByParity = function(a) {
      return a.sort((a,b) => (a%2)-(b%2))
};
