//Error and Error handling 

//Use const strictly 
// const makeError = () => {
//     try {
//         const name = "Sharvil";
//         name = "swami";
//     } catch(err) {
//         //console.table(err);
//         //console.warn(err);
//         // console.table(err);
//         console.error(err.stack);

//     }
// };

// makeError();


// const makeError = () =>{
//     try{
//         throw new customError("This is a custom Error");
//     } catch(err) {
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err.stack);
//     }
// };
// makeError();

// function customError(message){
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name} : ${this.message}`;
// }


const makeError = () => {
    let i = 1;
    while(i<= 1){
        try{
            if(i%2 !==0 ) {
                throw new Error("Odd Number")
            }
            console.log("Even number");
        } catch(err) {
            console.log(err.stack);
        } finally{
            console.log("...FInally");
            i++;
        }
    }
};
makeError();