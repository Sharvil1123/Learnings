/**
 * Instead of generating a random whole number between zero and a given number like we did before, 
 * we can generate a random whole number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
***********************--------*************
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater 
than or equal to myMin, and is less than or equal to myMax, inclusive.
 */

function randomNumber(myMin,myMax){
    let randRange = Math.floor(Math.random() * (myMax - myMin + 1)) + 1;
    console.log(randRange);
}

randomNumber(5,25)



