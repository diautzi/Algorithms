// HackerLand University has the following grading policy:
//
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
//
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .
//
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
//
// Function Description
//
// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
//
// gradingStudents has the following parameter(s):
//
// grades: an array of integers representing grades before rounding
// Input Format

function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) => {
        let diff = 5 - (grade % 5);
          if(diff < 3 && grade >= 38) {
              grade += diff;
          }
        return grade;
    })
}

// or oneLine solution using ternary operator

function gradingStudents(grades) {
    // Write your code here
    return grades.map(g => (g < 38 || g%5 < 3) ? g : g+(5-(g%5)))
}
