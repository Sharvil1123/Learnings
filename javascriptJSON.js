//javascript Object Notation
// use to send and recieve data
// it is a text format and completely language independent..

const myObj = {
    name : "Sharvil",
    hobbbies : ["Football", "Code", "Read books"],
    friends : ["Abhay" , "Naina", "Anjali"],
    hello : function(){
        console.log("Hello");
    }
};
console.log(myObj.name);
console.log(myObj.hobbbies);
myObj.hello();
console.log(myObj.friends[0]);
console.log(typeof(myObj));

const sendJson = JSON.stringify(myObj);
console.log(sendJson);

const recieveJson = JSON.parse(sendJson);
console.log(recieveJson);

