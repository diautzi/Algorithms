//Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
//We repeatedly make duplicate removals on S until we no longer can.



var removeDuplicates = function(S) {
    S = S.split('');
    for (let i = 0; i < S.length; i++) {
        if( S[i] === S[i+1] ) {
            S.splice(i,2);
            i -= 2;
            if(i < 0)i = -1;
        }
    }
    return S.join('');
};
