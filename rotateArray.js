// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    for ( let i=0; i< k; i++){
        nums.unshift(nums.pop(i))
    }
};

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

// let ar = [1,2,3,4]
// reverseArray(ar)  =>  [ 4, 3, 2, 1 ]

