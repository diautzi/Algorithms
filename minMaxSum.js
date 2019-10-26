/**
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24
Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
**/

function miniMaxSum(arr) {
    arr = arr.sort();
    var min = 0;
    var max = 0;
    var minArr = arr.slice(0, -1);
    var maxArr = arr.slice(1)
    for (let i = 0; i < minArr.length; i++) {
        min += minArr[i];
    }
    for (let i = 0; i < maxArr.length; i++) {
        max += maxArr[i];
    }
    console.log( min, max)
}
