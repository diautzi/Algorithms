// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

var generate = function(numRows) {
    let result = [];
    result[0] = [1];
    result[1] = [1, 1];
    for( let row = 2; row < numRows; row++) {
        result[row] = [1];
        for( let col = 1; col<= row-1; col++) {
            result[row][col] = result[row-1][col] + result[row-1][col-1]
            result[row].push(1)
        }
    }
    return result;
};
