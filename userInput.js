// different types of user input
/*
alert("Hey you are really idiot!") // sends alert about something

confirm("Do you want to quit?") // takes data as boolean .
// ok = true,   cancel = false

prompt("Please type your name --> ")
// takes user input and gives null when cancelled!
 */

let name = prompt("Enter your name ");
if(name){
    console.log(name.trim());
}else{
    console.log("You didn;t entered your name");
}

