//return the smallest missing positive number greater than 0 from array
//if [-1, -2] return 1


function smallestNum( arr) {
  for ( let i =1; i <= arr.length + 1; i++) {
    if ( arr[i] < 0) return 1; 
    if ( !arr.includes(i)) return i; 
  }
}
