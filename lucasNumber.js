// each Lucas number is defined to be the sum of its two immediate previous terms

const lucas = (n) => {    //your code here
  if (n === 0 ) return 2;
  if ( n === 1 ) return 1; 
  if ( n >= 2) {
    return (lucas( n - 1 ) + lucas( n - 2))
  };
};
