// *******-----------><-----------**********
//Ternary Operators
// Syntax -->
/*
condition ? ifTrue : ifFalse;
*/ 

/* Example -1
let soup;
let response = soup ? "Yes, we have soup": "Sorry, no Soup today.";
console.log(response);
*/
/* --> example 2
let soup = "Chicken Noodel Soup";
let isCustomerBanned = true;
let response = isCustomerBanned ? "Sorry, no soup for you"
:soup 
? `Yes, we have ${soup} today.`
: "Sorry No soup Today";
console.log(response);

*/

/* Rock Paper and Scissors */
let playerOne = "paper";
let computer = "scissors";
let result  = playerOne === computer
?"Tie Game!"
:playerOne === "rock" && computer === "paper"
? "Computer Wins!"
:playerOne === "paper" && computer === "scissors"
? "Computer wins!"
:playerOne === "scissors" && computer === "rock"
?"Computer Wins!"
:"playerOne wins";


console.log(result);




/*
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greate r";
  }
  else {
    return "b is greater";
  }
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
*/

