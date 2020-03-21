//You're now a baseball game point recorder.
//Given a list of strings, each string can be one of the 4 following types:
//Integer (one round's score): Directly represents the number of points you get in this round.
//"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
//"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
//"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
//Each round's operation is permanent and could have an impact on the round before and the round after.
//You need to return the sum of the points you could get in all the rounds.
   //Example:
   //Input: ["5","2","C","D","+"]
   //Output: 30


var calPoints = function(ops) {
    let score = [];
    for (let i = 0; i<ops.length; i++) {
        if (ops[i] === 'C') score.pop();
        else if (ops[i] === 'D') score.push(score[score.length - 1] * 2);
        else if (ops[i] === '+') score.push(score[score.length - 1] + score[score.length - 2]);
        else score.push(parseInt(ops[i]));
    }
    
    return score.reduce((score, sum) => score + sum );
};
