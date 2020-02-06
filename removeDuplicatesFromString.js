// Given a string, remove the duplicates in-place such that each element appear only once 
// Do not allocate extra space for another array, you must do this by modifying the input in-place with O(1) extra memory.

function removeDupl(str) {
  let arr = str.split("")
  for ( let i=0; i< arr.length; i++) {
    if ( arr[i] === arr[i+1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join(""); 
}

