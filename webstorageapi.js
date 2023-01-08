//not a part of the dom
//available top the js vai the global variable (window).
// we do not have to type the window it is applied by itself.

//eg -- >

// alert("hi");
// // same as
// window.alert("Good morning");

// window.location("Hello");

// const myObject = {
//     name : "Sharvil",
//     logName : function(){
//         console.log(this.name);
//     }
// };

// const myArray = ["eat","sleep","code"];

// sessionStorage.setItem("sharvilsSessionStorage",myObject);
// const mySessionData = sessionStorage.getItem("sharvilsSessionStorage");
// console.log(mySessionData);

const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Sharvil",
  hobbies : ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);


localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
// const key  = localStorage.key(0);
const storeLength = localStorage.length;

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
console.log(storeLength);