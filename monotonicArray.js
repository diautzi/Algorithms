// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let decresing = true;
    let incresing = true;
    for ( let i = 0; i <= A.length; i++) {
        if (A[i] < A[i + 1]) {
            decresing = false;
        }
        if ( A[i] > A[i + 1])
            incresing = false;
    }
    return decresing || incresing;
};