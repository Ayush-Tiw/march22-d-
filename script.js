// Promise
//promises are one step forward in callbacks
// A promise is an object and is something that is done/completed in the future.
// the syntax for javascript is 
// let myPromise= new Promise(function(resolve,reject){
    // some code
// })
// promise only accept callback functions,the resolve and reject parameters are used in the callback function,with resolve being called when activities conducted inside the callback function are successfull.If the procedure is unsuccessfull,rejection is called
let myPromise= new Promise(function(resolve,reject){
    const num1=1;
    const num2=2;
    if(num1==num2){
        resolve()
    }else{
        reject()
    }
})
// we created promise and we passed reject and resolve as callback inside promise constructor.If numbers are equal resolve is called otherwise reject will be called
// to use promise object we need "promise consumers" known as "then()" method for fulfillment and "catch()" method for rejection

myPromise.then(function(){
    console.log("Numbers are equal,success")
}).catch(function(){
    console.log("error")
})

//its an special js Object that produce a result after an asynchronized operation after its completetion whether it is success or error(this success or error property is not in callback)
//error may be timeout,network problem ,file not found
//we can do error handlling inside a function itself
//although js has error handelling properties but promise do it in it
//Promise has two output either success(resolved/fulfilled) or failure(rejected/unfullfilled)
//promise is a callback function
//purpose of promise?-->it handles error functions callback

// They can handle multiple asynchronous operation easily(thus avoid the undesired callback hell suitation) and provide better error handling,

//promise an example

function suman(data) {
  console.log(data);
}

// //create a promise
// let my_promise=new Promise(function(resolve,reject){ //this function is callback function
//     //promise code body
// //promise has a constructor method associated with it
// let number=19;
// if(number%2==0){
//     resolve("Even number")
// }
// else{
//     reject("odd number")
// }

// });
// //call the promise (PROMISE CONSUMING CODE)
// my_promise.then(
// //     when the promise is successfull
// //     when number is even go through this function
// function(value){//this is for if condtion
//     suman(value)
// }.catch( 
// function(error){//this is for else condition
//     //when number is odd go through this function
//     //when the promise is unsuccessfull
//     suman(error)
//     //we have to take two function for resolve and reject seperately otherwise it will through an error
// }
// )//then() keyword give us the repurcursion(aftermath) of promise

// function suman(data){
//     console.log(data);
// }

//literature way explain yo understand
// let my_promise=new Promise(function(resolve,reject){
//     let condition

//     if(condition is met){
//         resolve("when the promise is kept and fullfilled")
//     }
//     else{
//         reject("when the promise is not kept")
//     }
// })

//self tried to understand the promise

// let my_promise=new Promise(function(resolve,reject){
// //promise has a constructor method associated with it
// let number=19;
// if(number%2==0){
//     resolve("Even number")
// }
// else{
//     reject("odd number")
// }

// });
// //call the promise
// // console.log(my_promise)//Promise {<fulfilled>: 'Even number'}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "Even number"(with number=32(even))

// console.log(my_promise)//
// // Promise {<rejected>: 'odd number'}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "rejected"
// // [[PromiseResult]]: "odd number"(with number=19(odd))

//asynchronous--something is happenning in future but not right now

// const url = "https://api.thedogapi.com/v1/breeds";

// //code without promise & callback also

// function suman(data) {
//   //display function
//   console.log(data);
// }

// function guvi(url, my_callback_function) {
//   let request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = function () {
//     if (request.status == 200) {
//       my_callback_function(this.responseText);
//     } else {
//       my_callback_function(request.status);
//     }
//   };
//   request.send();
// }

// guvi(url, suman);

// this method is browser specific it does not open in terminal throw an errror

// //same code with promise

// let suman_promise = new Promise(function (resolve, reject) {
//   //code to be executed
//   let request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = function () {
//     if (request.status == 200) {
//       resolve(request.responseText);
//     } else {
//       reject(request.status);
//     }
//   };
//   request.send();
// });
// suman_promise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );


//Class Task
// from the API URL https://pokeapi.co/api/v2/pokemon?limit=50 use the promise to fetch the data from the server and display it into your HTML using dynamic DOM manipulation technique.
// The data should be displayed in table where if their is any image should be also displayed as 100*100


// not completed by you

// const url=" https://pokeapi.co/api/v2/pokemon?limit=50"



// let suman_promise = new Promise(function (resolve, reject) {
//     //code to be executed
//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = function () {
//       if (request.status == 200) {
//         resolve(request.responseText);
//       } else {
//         reject(request.status);
//       }
//     };
//     request.send();
//   });
//   suman_promise.then(
//     function (value) {
//       document.write(JSON.Stringify(value))
//     },
//     function (error) {
//       console.log(error);
//     }
//   );



//   how to write a promise in more professional way

// const url="https://restcountries.com/v3.1/all"

// function suman(url){
//     let suman_promise=new Promise(function(resolve,reject){
//         let request=new XMLHttpRequest();
//         request.open("GET",url);
//         request.onload=function(){
//             if(request.staus==200){
//                 resolve(request.responseText);
//             }
//         else{
//             reject("Error happened in your program !");
//         }
//         };
//         request.send();//fetching the information
//     });
//     return suman_promise;
// }

// let promise=suman(url)

// const suman_promise_consumer=()=>{
//     promise.then((result)=>{
//         console.log({result})
//     },
//     (error)=>{
//         console,log("ERROR:Error with the url"+error)
//     }
//     );
// };

//books-oreily's Javascript,oreily's NodeJS,oreily's ReactJS
//website-->https://javascript.info/