 const myArray = [];

 for (let i = 1; i <= 10; i++) {
     myArray.push(i);
}

// // console.log(Math.round(Math.random(myArray) * 10));

// myArray[0] = "Shab";
// myArray[1] = true;
// myArray[2] = 15336;

// // array elements
// console.log(myArray);

// // length of the array
// console.log(myArray.length);

// // last element of the array
// console.log(myArray[myArray.length -1]);
// // second element of the array
// console.log(myArray[1]);

// // add element to the array

// myArray.push("NewElement");
// console.log(myArray);
// // removing last element from array
// const lastItem = myArray.pop();
// console.log(myArray);

// // unshift method = add element to array at first position.
// myArray.unshift("New");
// console.log(myArray);

// // shift method = removes the first element and returns it.
// const firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray);

// // splice method  = deletes the elements from the given range in the parameter.

// // myArray.splice(1,2);
// // console.log(myArray);
// // console.log(myArray[0]);


// // adds 52 to the index 1 !
// myArray.splice(1,1,52);
// console.log(myArray);

// /*
// New array
// */
// // slicing method = start(2) included , end(5) excluded
// const newArray = ["A","B","C","D","E","F"];
// const slicedArray = newArray.slice(2,5);
// console.log(newArray);
// console.log(slicedArray);

// // reverse array method = 
// // newArray.reverse();
// // console.log(newArray);

// // joining the array with the join method

// const joinArray = newArray.join();
// console.log(joinArray);

// // spliting the array with split method.
// const splitArray = joinArray.split(",");
// console.log(splitArray);

// // concatianting the array with the concat method.
// const array1 = ["A","B","C"];
// const array2 = ["D","E","F"];

// const concatArray = array1.concat(array2);
// console.log(array1);
// console.log(array2);
// console.log(concatArray);

// // another method
// const firseConcat = [...array1, ...array2];
// console.log(firseConcat);


// Nested Arrays!!
const shelfA = [
    "baseball",
    "football",
    "Volleyball",
];
const shelfB = [
    "tennisballs",
    "basketball",
    "golf",
];

const clotheShelfA = [
    "tank-tops",
    "T-Shirts",
    "Jerseys"
];

const clotheShelfB = [
    "sweat-tops",
    "sweat-pants",
    "hoodies"
]

console.log(shelfA[1]);
console.log(clotheShelfB[0]);

const shelfDept = [shelfA, shelfB];
const clothesDept = [clotheShelfA, clotheShelfB];

console.log(shelfDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [shelfDept,clothesDept];
console.log(sportsStore[0][1][1]);
console.log(sportsStore[1][1][0]);











