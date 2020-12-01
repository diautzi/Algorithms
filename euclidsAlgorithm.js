// the greatest common divisor (GCD) of two numbers
// the largest number that divides both of them without leaving a remainder

function gcd(a, b) {
  while (b != 0 ) {
    let temp = a;
      a = b;
      b = temp % b
    }
  return a;
}
