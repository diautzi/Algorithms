//Having an array, return all posible pairs 

let arr = [1,2,3,4,5]

function allPairs(nums) {
  let pairs = [];
  for (let i=0; i< nums.length; i++) {
    for(let j = i+1; j< nums.length; j++){
      pairs.push([arr[i], arr[j]])
    }
  }
  return pairs
}

allPairs(arr) => [ [ 1, 2 ],[ 1, 3 ],[ 1, 4 ],[ 1, 5 ],[ 2, 3 ],[ 2, 4 ],[ 2, 5 ],[ 3, 4 ],[ 3, 5 ],[ 4, 5 ] ]
