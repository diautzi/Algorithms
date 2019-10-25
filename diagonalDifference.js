/** 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers 
/

function diagonalDifference(arr) {

    var firstSum = 0;
    var secondSum = 0;

    for (var i = 0; i < arr.length; i++) {
        // we add up the sum for the first diagonal( where first diagonal means i and j are always gonna be equal)
        for (var j = 0; j < arr.length; j++) {
            if (i === j) {
                firstSum += arr[i][j];
            }
            // we add up the elements of the second diagonal, where "i+j=n-1" ALWAYS!
            if (i + j === arr.length - 1) {
                secondSum += arr[i][j];
            }
        }
    }
    // Math.abs()= built in function that return the absolute value of an integer
        return Math.abs(firstSum - secondSum);
}
