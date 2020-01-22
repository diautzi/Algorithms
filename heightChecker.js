//Students are asked to stand in non-decreasing order of heights for an annual photo.
//Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

var heightChecker = function(heights) {
    let sorted = heights.slice().sort((a,b) => a-b);
    let count = 0;
    for ( let i= 0; i< sorted.length; i++) {
        if( sorted[i] != heights[i])
            count ++;
    }
    return count;
};
