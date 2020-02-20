//Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
//Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.
//Example:
//Input: 
  //paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
  //banned = ["hit"]
  //Output: "ball"

var mostCommonWord = function(paragraph, banned) {
    const memo = {}
    paragraph = paragraph.match(/[A-Za-z]+/g)
    paragraph = paragraph.map(word => word.toLowerCase())
    
    for (const word of paragraph) {
        memo[word] = memo[word] ? memo[word] += 1 : memo[word] = 1
    }
    
    for (const word of banned) {
        memo[word] = memo[word] ? memo[word] = -1 : null
    }
    
    return Object.keys(memo).reduce((a, b) => memo[a] > memo[b] ? a : b)
};
