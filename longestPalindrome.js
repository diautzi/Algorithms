// Given a string s, return the longest palindromic substring in s.

const isPalindrome = (s) => {
    return s === s.split('').reverse().join('');
};

const longestPalindrome = s => {
    for (let i = s.length - 1; i >= 0; i--) {
        let j = 0;
        let k = j;
        while (k < s.length) {
            let substr = s.substring(j, k + 1);
            if (isPalindrome(substr)) {
                return substr;
            }
            j++;
            k++;
        };
    };
    return "";
};