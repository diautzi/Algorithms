function makeDiamond(letter){ 
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let indexOfLastLetter = letters.indexOf(letter);
    let topDiamond = [];

    for (let i = 0; i <= indexOfLastLetter; i++){
      let currentLetter = letters[i];
      let padding = ' ';
      let line = '';
      if ( currentLetter === 'A') {
        line += padding.repeat(indexOfLastLetter - i) + currentLetter + padding.repeat(indexOfLastLetter - i)
      }
      else {
        line += padding.repeat(indexOfLastLetter - i) + currentLetter + padding.repeat( i * 2 - 1) + currentLetter  + padding.repeat(indexOfLastLetter - i)
      }
      topDiamond.push(line)
    };

    let bottomDiamond = topDiamond.slice(0, indexOfLastLetter)
    bottomDiamond.reverse();
    let finalDiamond = topDiamond.concat(bottomDiamond);
    return finalDiamond.join('\n') + '\n';
};