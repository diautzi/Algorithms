/**Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only **/


 */

var lengthOfLastWord = function(s) {
    let arr = s.trim().split("").reverse();
    let i = 0;
    while(arr[i] != ' ' && i < arr.length){
        i++;
    }
    return i;
};  


/**  OR 
var lengthOfLastWord = function(s) {
    if(s.length>0) {
        return (s.slice(s.lastIndexOf(" ")).length -1)
    }
    
    return 0;
}; **/



