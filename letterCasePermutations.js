//Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  
//Return a list of all possible strings we could create.
  //Examples:
  //Input: S = "a1b2"
  //Output: ["a1b2", "a1B2", "A1b2", "A1B2"]


var letterCasePermutation = function(S) {
    const alphabetic = /[a-zA-Z]/;
    const lowercased = /[a-z]/;

    let permutations = [S];

    for (let i = 0; i < S.length; i++) {
        if (!alphabetic.test(S[i])) continue;
 
        const method = lowercased.test(S[i]) ? 'toUpperCase' : 'toLowerCase';
        
        permutations = permutations.concat(permutations.map(perm => {
            const before = perm.substring(0, i);
            const middle = perm[i][method]();
            const after = perm.substring(i + 1);
            return before + middle + after;
        }));
    }
    
    return permutations;
};
