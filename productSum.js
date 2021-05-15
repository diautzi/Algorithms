// write a function that takes in a special 'array' and return its product sum
// special array is a non-empty array that contains either integers or other special arraya
// O(n) time  | O(n) space - where n is the total number of elements in the array
// including sub-elements, and d is the greates depth of special arrays in the array

function poductSum(array, multiplier = 1) {
    let sum = 0;
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}