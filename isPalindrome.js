// First solution
// time complexity O(n^2) n square time because we create new string
// space complexity O(n)

function isPalindrome(string) {
  let reversedString = '';
  for ( let i = 0; i< string.length; i++){
    reversedString += string[i]
  }
  return reversedString == string
};

isPalindrome('abcdcba')


// Second Solution
//  O(n) time complexity
//  O(n) space
function isPalindrome(string) {
  let reversedString = [];
  for ( let i = 0; i< string.length; i++){
    reversedString.push(string[i])
  }
  return reversedString.join("") == string
};

isPalindrome('abcdcba')


// Third solution || recursive 
// O(n) time complexity
// o(n) space complexity

function isPalindrome(string, i=0) {
  j = string.length - 1 - i;
  return i >= j ? true : string[i] == string[j] && isPalindrome(string, i+1)
}

isPalindrome('abcdcba')