//In the army, each soldier has an assigned rank. A soldier of rank X has to report to (any) soldier of rank X+1. Many Soldiers can report to the same superior. Write a function: that given an array ranks consisting ranks return the number of soldiers who can report to some Superior. Examples:
//Given ranks = [3,4,3,0,2,2,3,0,0] should return 5
//Given Ranks = [4,2,0] should return 0,
//Given Ranks = [4,4,3,3,1,0] your function should return 3

function reportingRank(ranks) {
  let count = 0;
  let sortedRanks = ranks.sort(); 
  
  for ( let i = 0; i < sortedRanks.length; i++) {
    if ( ranks.includes(sortedRanks[i] + 1)) 
      count ++; 
  }
  return count;
}

