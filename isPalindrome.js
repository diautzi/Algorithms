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

// Fourth Solution using pointers 
// o(n) time 
// o(1) space - constant space, nothing depends on the size of the input string in this solution

function isPalindrome(string){
  let leftIdx = 0;
  let rightIdx = string.length -1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] != string[rightIdx] ) return false;
    leftIdx +=1;
    rightIdx -= 1
  }
  return true
};

isPalindrome('abcdcba')