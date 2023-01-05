// // const myObject = {
// //     Name : "Sharvil"
// // };

// // const otherObejct = {
   
// //     alive : true,
// //     age : 20,
// //     hobbies : ["Eat" , "code" , "sleep"],
// //     food : {
// //         morning : "parle G biscuit",
// //         afternoon : "Chapati Bhaji",
// //         night : "Rice"
// //     },
// //     action : function(){
// //         return `Time for ${myObject.Name}'s breakfast. The Breakfast is ${otherObejct.food.morning}.`;
// //     }
// // };

// // console.log(otherObejct.food.night);
// // console.log(otherObejct.food);
// // console.log(otherObejct.action());

// const vehicle = {
//     wheels : 4,
//     engine : function(){
//         return "Vroom Vroom"
//     }
// };

// // const truck = Object.create(vehicle);
// // truck.doors = 2;
// // console.log(truck);
// // console.log(truck.wheels);
// // console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function(){
//     return ' Bhong bhong';
// };

// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car);
// tesla.engine = function(){
//     return "suiii"
// };
// console.log(tesla.engine());


const band = {
    vocals : "Shubham BigDick",
    guitars : "Sharvil Bacche",
    bass : "Prajwal Chode",
    drums : "Hitesh Halav-re",
    piano : "Chinmay Chodrekar",
    flute : "Neeraj ShajjanShitty",
    tabla : "Shubham Chaadarmor"
};

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for(let roles in band){
//     console.log(` For ${roles} ,it is the ${band[roles]}`);
// };

/**Destructuring the Objects */

// const {guitars : myVariable , bass : myBass} = band;
// console.log(myVariable);
// console.log(myBass);

// const {vocals , guitars, bass, drums , piano , flute , tabla} = band;
// console.log(vocals);
// console.log(guitars);
// console.log(bass);
// console.log(drums);
// console.log(piano);
// console.log(flute);
// console.log(tabla);


// functions with objects

function singig({vocals , guitars}){
    return `${vocals} & ${guitars}`
};

console.log(singig(band));