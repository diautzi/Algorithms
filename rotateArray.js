//A left rotation operation on an array shifts each of the array's elements  unit to the left. 
//Given an array  of  integers and a number, perform number left rotations on the array. 
//Return the updated array to be printed as a single line of space-separated integers.
//Example:
      //Sample Input
      5 4
      [1 2 3 4 5]
      ///Output
      [5 1 2 3 4]
      
      
function rotLeft(a, d) {
    for ( let i=0; i< d; i++) {
        let last = a.shift();
        a.push(last)
    }
    return a
}
    
