function decode( str) {
  if( str.length == 0 ) {
    return ""
  }
  else {
       let char = str[0];
       let quantity = str[1];
        return char.repeat(parseInt(quantity)) + decode(str.slice(2));
  }
}

// decode("a1b2c3d2") => "abbcccdd"
