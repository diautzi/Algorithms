//Your friend is typing his name into a keyboard. 
//Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
//You examine the typed characters of the keyboard.  
//Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

const isLongPressedName = (name, typed) => {
    let i = 0, j = 0;
    while(i < name.length && j < typed.length){
      if(name[i] == typed[j]){
        i++;
        j++;
      }else{
        j++;
      }
    }
   return  i == name.length ? true : false;
}
