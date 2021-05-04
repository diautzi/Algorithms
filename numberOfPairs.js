// write a function that looks at pair of elements of the array that are equal but they occupy different positions in the array

function numberOfPairs(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    for ( let i = 0; i < A.length; i++) {
        for ( let j = i+ 1; j < A.length; j++){
            if (A[i] === A[j]) {
                count++
            }
        }
    }
    return count;
};

numberOfPairs([3, 5, 6, 3, 3, 5])