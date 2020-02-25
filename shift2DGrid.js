//Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.


var shiftGrid = function(grid, k) {
    if(!grid.length || k < 1) return grid
    
    // first flatten the array 
    let flattened = grid.reduce((acc, el) => {
        return acc.concat(el)
    },[])
    
    // now that we have one array, just rotate it k times
    for(let i = 0; i < k; i++) {
        flattened.unshift(flattened.pop())
    }
    
    // turn it back into a grid
    let res = []
    let size = grid[0].length
      for(let i = 0; i < flattened.length; i = i+size)
      res.push(flattened.slice(i,i+size));
      return res;
};
