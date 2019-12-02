//Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

//birthday has the following parameter(s):

  //s: an array of integers, the numbers on each of the squares of chocolate
  //d: an integer, Ron's birth day
  //m: an integer, Ron's birth month
  
    Sample Input 

      5
      1 2 1 3 2
      3 2
    Sample Output 

      2
      
      
function birthday(s, d, m) {
    let count=0;
    for( let i=0; i< s.length; i++){
        let sum = 0;
        for(let j=0; j< m; j++){
            sum+=s[i+j]
        }
        if (sum === d){
            count++;
        }
    }
    return count;
}    
