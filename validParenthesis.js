// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

    // Input: "()"
    //Output: true
    
  var isValid = function(s) {
      var stack = [],
      s = s.split("");

      for(let i = 0; i < s.length; i++){
          switch(s[i]){
              case "(":
                  stack.unshift(")");
                  break;
              case "[":
                  stack.unshift("]");
                  break;
              case "{":
                  stack.unshift("}");
                  break;
              default:
                  if(stack.shift() !== s[i])
                      return false;
                  break;
          }
      }

      if(stack.length === 0)
          return true;
      return false;
 };
