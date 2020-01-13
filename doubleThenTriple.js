//Having an array, return the tripled values of the doubled values of the array


let arr = [2,3,4]
function doubleThenTriple(num) {
  let doubled = num.map(n => n*2)
  return doubled.map( n => n* 3)
}

doubleThenTriple(arr) => [ 12, 18, 24 ]
