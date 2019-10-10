/** Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider **/

function repeatedString(s, n) {
  let count = 0;
  let repetedStr = s.splice(0, n % s.length)
  for ( let i=0; i< n; i++) {
    if (repetedStr[i] === "a"){
      count += 1
    }
  }
return count;
}
