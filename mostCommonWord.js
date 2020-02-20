//Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
//Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.
//Example:
  //Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
  //banned = ["hit"]
  //Output: "ball"

var mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.replace(/[!?',;.]/g, "").toLowerCase().split(" ");
    let obj = {};
    let max = 0;
    let res;
    arr.map(word => {
        if(banned.includes(word)) return;
        if(!obj[word]){
            obj[word] = 1;
        }
        else obj[word] ++;
    })
    for(let count in obj){
        if(obj[count] > max){
            max = obj[count];
            res = count;
        }
    }
    return res;
};
