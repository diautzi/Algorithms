
// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.
//
// compareTriplets has the following parameter(s):
//
// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating


function compareTriplets(a, b) {
    let result = [0, 0];
    if (a[0] > b[0]) result[0] += 1;
    if (a[1] > b[1]) result[0] += 1;
    if (a[2] > b[2]) result[0] += 1;
    if (a[0] < b[0]) result[1] += 1;
    if (a[1] < b[1]) result[1] += 1;
    if (a[2] < b[2]) result[1] += 1;
    if (a[0] === b[0]) result [0] +=0
    if (a[0] === b[0]) result[1] += 0
            //  for (let i = 0; i < a.length; i++) {
            //    let char = a[i];
            //      if (char > b[i]) {
            //          result[0] += 1;
            //      }
            //  };

            //      for (let i = 0; i < b.length; i++)  {
            //          let char = b[i];
            //          if (char < a[i]) {
            //              result [1] += 1
            //          }
            //  }
     return result;
 }
