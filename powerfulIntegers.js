//Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.
//Return a list of all powerful integers that have value less than or equal to bound.
//Input: x = 2, y = 3, bound = 10
//Output: [2,3,4,5,7,9,10]


// var powerfulIntegers = function(x, y, bound) {
//     let result = new Set();
//     for ( let i = 0; i <= bound; i++) {
//         for ( let j = 0; j <= bound; j++) {
//             let powerfull = Math.pow(x, i) + Math.pow( y, j);
//             if ( powerfull <= bound) {
//                 result.add(powerfull)
//             }
//         }
//     }
//     return Array.from(result)
// };
