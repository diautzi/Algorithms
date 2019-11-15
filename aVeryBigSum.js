/**Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

ar: an array of integers **/


// using reduce method 

function aVeryBigSum(ar) {
    return ar.reduce((acc, cur) => acc + cur);
}

// using for loop //////


function aVeryBigSum(ar) {
    let result =0;
    for( let i=0; i< ar.length; i++) {
        result+=ar[i]
    }
    return result
}

