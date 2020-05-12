//Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.
//
//Input: num = 5
//Output: 2 => Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.


const findComplement = function(num) {
    let n = 2;
    while (n <= num) n *= 2;
    return num ^ (n - 1);
};
