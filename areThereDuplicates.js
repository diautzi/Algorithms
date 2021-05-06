// implement a functions which accepts a variable number of arguments, and checks wheather there are any duplicates among the arguments passed in

// solution 1 - frequency counter
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
};

// solution 2 - one liner using new Set()
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
};


// solution 3 - multiple pointers 
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
};