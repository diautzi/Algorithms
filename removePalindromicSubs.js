//Given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.
//Return the minimum number of steps to make the given string empty.

//SOLUTION 1
//We traversal the string from both edges to the middle to find out if it's a palindrome.

const removePalindromeSub = s => {
  if (s.length === 0) return 0;
  for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
    if (s[left] !== s[right]) return 2;
  }
  return 1;
};

//SOLUTION 2
//We reverse the string and check if it's equal to itself.

const removePalindromeSub = s => s.length === 0 ? 0 : s.split('').reverse().join('') === s ? 1 : 2;
