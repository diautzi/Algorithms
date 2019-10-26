/**
Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below. It should print a staircase as described above.

staircase has the following parameter(s):

n: an integer
**/

function staircase(n) {
    for (var i = 0; i < n; i++) {
        var space = n - 1 - i;
        var hash = i + 1;
        var stair = ' '.repeat(space) + '#'.repeat(hash);
        console.log(stair);
    }
}
