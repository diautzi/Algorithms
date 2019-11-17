//return substring without cutting word in half 

function cut(string, num) {
  while (string.length > num && string.indexOf(' ') <= 0 && num < string.length/2) {
    return string.substring(0, num);
  }
  return ('string does not meet conditions')
}
cut(string, num);
