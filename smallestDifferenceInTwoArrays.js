// write a function that takes 2 non-empty arrays of integers and find the pair of numbers ( one from each array) whose difference is clossest to zero

// O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo =0;
  let smallest;
  let current;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      firstNum += 1;
    } else if ( secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo += 1;
    }
    else {
      return [firstNum, secondNum]
    }
    return smallestPair
  }
}

smallestDifference([3, 1, 6], [1, 4,2])