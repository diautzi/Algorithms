// Given an  array of integers between 1 and n, inclusive, where n is the length of the array
// write a function that returns the first integer that appears more than once 

// Solution 1 - brute force
// O(n^2) square n time complexity | O(1) space - where n is the length of the input array

function firstDuplicateValue(array) {
  let minSecondIndex = array.length;
  for ( let i =0; i < array.length; i++) {
    const value = array[i];
    for ( let j = i+ 1; j < array.length; j++) {
      const valueToCompare = array[j];
      if ( value === valueToCompare) {
        minSecondIndex = Math.min(minSecondIndex, j);
      }
    }
  }
  if (minSecondIndex === array.length) return - 1;
  return array[minSecondIndex];
};

// firstDuplicateValue([1, 2, 2, 3, 1])

// Solution 2 - using new data structure hash increase in space complexity
// O(n) linear time time | O(n) liniar space complexity- where n is the length of the input array
function firstDuplicateValue(array) {
  const seen = new Set();
  for ( const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
};

// firstDuplicateValue([1, 2, 2, 3, 1])

// Solution 3 MOST OPTIMAL solution
// check the index of the array and mark the value of that index to be a negative value, so we know we have seen that value in the array before
// O(n) liniar time complexity | O(1) constant space complexity - where n is the length of the input array
function firstDuplicateValue(array) {
  for ( const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *=-1;
  }
  return -1;
}

// firstDuplicateValue([1, 2, 2, 3, 1])