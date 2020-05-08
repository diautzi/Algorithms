//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
//The number of elements initialized in nums1 and nums2 are m and n respectively.
//You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//Example:
  //Input:
  // let nums1 = [1,2,3,0,0,0]
  // let m = 3
  // let nums2 = [2,5,6]
  // let n = 3
  //Output: // merge(nums1, m, nums2, n) => result: [1,2,2,3,5,6]

function merge(nums1, m, nums2, n) {
  //forEach() calls a provided callback function once for each element in an array in ascending order.
    nums2.forEach(i => nums1[m++] = i);
    return nums1.sort((a,b)=>a-b);
};
