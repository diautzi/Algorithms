/** Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order. **/

const intersect = (nums1, nums2) =>
  nums1.filter(item => (
    nums2.includes(item) ? nums2.splice(nums2.indexOf(item), 1): false
  ));


// var array_intersection = array_first.filter(function(x) {
// 	// checking second array contains the element "x"
// 	if(array_second.indexOf(x) != -1)
// 		return true;
// 	else
// 		return false;
// });

  
  /** sorting array
  var intersect = function(nums1, nums2){
    let arr = [];
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let i = 0; 
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            arr.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        };
    }; 
    
    return arr;
};
  **/ 
