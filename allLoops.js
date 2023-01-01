// let no = 0;
// while( no < 200){
//     no += 1;
//     console.log(no);

// }


// let myName = "Sharvil";
// for (let i = 0; i <= myName.length; i++){
//     console.log(myName.charAt(i));
// }

// let nos = 10;
// while(nos <=100){
//     console.log(nos);
//     nos++;
// }

let myName = "Shaarvil";
let counterNos = 0;
let myLetter;
while(true){
    myLetter = myName[counterNos];
    console.log(myLetter);
    // if(myLetter === 'v'){
    //     break;
    // }
    if(counterNos === 1){
        counterNos += 2;
        continue;
    }
    if(myLetter === "i") break;
    counterNos++;   
}