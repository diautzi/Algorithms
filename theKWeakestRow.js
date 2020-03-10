//Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
//A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j.
//Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

var kWeakestRows = function(mat, k) {
    let arr = [];
    let length = mat.length;
    let subLength = mat[0].length;
    
    for(let i = 0; i < length; i++){
        let count = 0;
        for(let j = 0 ; j < subLength; j++){
            count += mat[i][j];
        }
        arr.push({'index':i, 'count':count});
    }
    
    arr.sort((a,b) => a.count == b.count ? a.index - b.index : a.count - b.count)

    let result = [];
    arr.slice(0,k).forEach((elem)=>result.push(elem.index));
    return result;
    
};
