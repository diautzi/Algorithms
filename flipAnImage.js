//Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
//Example 1:
  //Input: [[1,1,0],[1,0,1],[0,0,0]]
  //Output: [[1,0,0],[0,1,0],[1,1,1]]

var flipAndInvertImage = function(A) {
    if(!A) return;
    let res =[];
    let ALens = A.length;
    for(let i = 0; i < ALens; i++){
      res.push([]);
      while(A[i].length > 0){
        res[i].push(A[i].pop()^1);
      }
    }
    return res;
};
