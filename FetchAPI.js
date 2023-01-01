// fetch api requires a dicsussions of...
//callback, promises . thenables and async/await

//---------->>>  callbacks <<<---------------------------

// function firstFunction(parameter, callback){
//     // do stuff
//     callback();

// };

// // AKA callback hell
// firstFunction(para, func(){
//     // do stuff
//     secondFunction(para, function(){
//         thirdFunction(para, funnction(){

//         });
//     });
// });

// ---------->>>  promises <<<---------------------------
// 3 states -- pending, fulfilled, and rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve("Yes! resolved the promsie");
//     } else{
//         reject("No! reject  the promsie");
//     }
// });

// console.log(myPromise)

// myPromise.then(value =>{
//     console.log(value);
// });

// myPromise
// .then(value => {
//     return value + 1;
// })
// .then(newValue => {
//     console.log(newValue);
// });

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve("myNextPromise resolved");
//     }, 3000);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// //pending state
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         // console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         // console.log(data);
//         data.forEach(user => {
//             console.log(user);
//         })
//     });


//---------->>>  Async/Await <<<---------------------------

// const myUsers = {
//     userList : []
// };

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     console.log(jsonUserData);
//     return jsonUserData
// };

// // const anotherFunc = async () => {
// //     const data = await myCoolFunction();
// //     console.log(data);
// // }

// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }

// anotherFunc();
// console.log(myUsers.userList)


// ------>>> Workflow Functions  <<<-----------

// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

//     postToWebPage(userEmailArray);
//     // console.log(userEmailArray);
// };

// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

// second parameter of fetch is object.

// const getDadJokes = async () => {
//     const response = await fetch("https://icanhazdadjoke.com",{
//         method : "GET",
//         headers : {
//             Accept : "application/json"
//         }
//     });
//     const jsonJokesData = await response.json();
//     console.log(jsonJokesData);
// };

// getDadJokes();

// const jokeObject = {
//     id: 'kqjNmbM7wsc', 
//     joke: 'Why do wizards clean their teeth three times a day? To prevent bat breath!'
// }

// const postData = async (jokeObj) => {
//     const response = await fetch("https://httpbin.org/post",{
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();
//     console.log(jsonResponse.headers);
// }

// postData(jokeObject);

// const requestJoke = async (firstName ,lastName) => {
//     // const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse.value.joke);
// }

// requestJoke("Sharvil","Bhalke");

const getDataFromForm = () => {
    const requestObj = {
        firstName : "Bruce",
        lastName : "Lee",
        categories : ["nerdy"]
    };
    return requestObj;
};

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;

};

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
};

// procedural "workflow Function"

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("Finished");
}

processJokeRequest();