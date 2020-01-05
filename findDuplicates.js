//Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//Find all the elements that appear twice in this array.

  //Example:
  //Input:
  //[4,3,2,7,8,2,3,1]
  //Output:
  //[2,3]


var findDuplicates = function(nums) {
    let duplicates = [];
    let sorted = nums.sort();
    for( let i=0; i< sorted.length; i++) {
        if(sorted[i] == sorted[i+1]){
            duplicates.push(sorted[i])
        }
    }
    return duplicates;
};
