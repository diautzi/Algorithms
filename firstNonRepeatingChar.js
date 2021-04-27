// First Solution - brute force w 2 nested loops
// time = o(n^2) square n;
// space = o(1);
function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let foundDuplicate = false;
    for (let j= 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) foundDuplicate = true;
    }
    if (!foundDuplicate) return i;
  }
  return -1;
};

firstNonRepeatingCharacter('lcode')

// Second Solution - optimal solution using HashMap
// O(n) time | O(1) space 
// where n is the length of the input string 
// the constant space is because the input string only has lowercase English alphabet letters => our table will never have more then 26 characters
function firstNonRepeatingCharacter(string) {
  charFrequencies = {};

  for (const char of string) {
    if (!(char in charFrequencies)) charFrequencies[char] = 0;
    charFrequencies[char]++;
  }

  for ( let i = 0; i < string.length; i++) {
    const char = string[i];
    if ( charFrequencies[char] === 1) return i;
  }

  return -1;
};

firstNonRepeatingCharacter('coolcode')