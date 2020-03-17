//Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//Each letter in the magazine string can only be used once in your ransom note.


var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for(let letter of magazine) {
        if (!map[letter]) {
            map[letter] = 0;
        }
        map[letter]++;
    }
    
    for(let letter of ransomNote) {
        if(!map[letter]) {
            return false;
        } 
        map[letter]--;
    }
    return true;
};
