// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// var generate = function(numRows) {
//     let result = [];
//     result[0] = [1];
//     result[1] = [1, 1];
//     for( let row = 2; row < numRows; row++) {
//         result[row] = [1];
//         for( let col = 1; col<= row-1; col++) {
//             result[row][col] = result[row-1][col] + result[row-1][col-1]
//             result[row].push(1)
//         }
//     }
//     return result;
// };

var generate = function(numRows) {
    let resultArray = [];
    for(let i = 1; i <= numRows; i++){
        let subArray = [];
        for(let j = 0; j < i; j++){
            if(j === 0 || j === i-1 ){
                subArray.push(1);
            }else{
                subArray.push(resultArray[i-2][j-1]+resultArray[i-2][j]);
            }
        }
        resultArray.push(subArray);
    }
    return resultArray;
};
