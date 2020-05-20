//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
    for(var i=0;i<s.length;i++){
        if(s.indexOf(s.charAt(i))===s.lastIndexOf(s.charAt(i))){
            return i;
        }
    }
    return -1;
};
