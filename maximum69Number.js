//Given a positive integer num consisting only of digits 6 and 9.
//Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
//Example:
 //Input: num = 9669
 //Output: 9969
 

/////////////ES6////////////////////

let maximum69Number  = function(num) {
  return parseInt(num.toString().replace('6', '9'))
 };

///////////FOR LOOP////////////

var maximum69Number  = function(num) {
    let s = String(num);
    s = s.split('');
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '6') {
            s[i] = '9';
            break;
        }
    }
    return parseInt(s.join(''));
};
