// // sync 
// console.log("1");
// console.log("2");
// console.log("3");

// // async - to reduce the delay in the UI
// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 1500); // will run parallely and doesnt block the flow of the code. it gets executed when the time out is finished.
// console.log("4");
// console.log("5");

// // callbakcs - func passed as an arg for another func
// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallBack) {
//     sumCallBack(a, b); //func is passed as an arg
// }

// // calculator(2,4, sum);
// calculator(2,5, (a,b) => {
//     console.log(a+b);
// })

// // setTimeout(hello, 3000); //1000 -> 1000ms = 1sec

// // callback hell - nested callbacks stacked below one another forming a pyramid structure
// function getData(dataVal) {
//     setTimeout(() => {
//         console.log("data", dataVal);
//     }, 2000);
// }

// getData(343);

// // to get data one after one - we can use callbacks
// function getData(dataVal, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataVal);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// // getData(1,getData(2)); // this will give a type error as here func is being called immediately. soln: arrow funcs are used to resolve this.
// // getData(1, () =>{
// //     getData(2);
// // });

// getData(1, () =>{
//     getData(2, ()=> {
//         getData(3);
//     });
// });

// // getData(1)
// //     .then((res) => {
// //         return getData(2);
// //     })
// //     .then((res) => {
// //         return getData(3);
// //     })
// //     .then((res)=> {
// //     console.log('success');
// //     })
// // promise chaining

// // promises - to resolve the above callback hell problem
// //  it is a js obj that eventually completes a task, it has 2 handlers - resolve, reject - these are the callbacks provided by js
// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("resolved"); // without resolve/reject, the state will be pending
//     // reject("some error") // throws an error 
// });
// console.log(promise);

// // states of a promise - pending, fulfilled, rejected
// // an api returns new promise that a programmer works with.
// function data (dataId, getData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve('success');
//             // reject('error'); // get srejected if couldnt get data
//             if(getData) {
//                 getData();
//             }
//         }, 4000);
//     });
// }

// let prom = data(542);
// console.log(prom); // status will be pending until the setTimeOut is not done and value is not logged. once the data is obtained, state will be changed to fulfilled

// // promises are using along with then (if fulfilled) and catch (if rejected)
// // promise.then((res) => {....}) promise.catch((err) => {.....})

// const getProm = () => {
//     return new Promise((resolve, reject) => {
//         console.log("prom");
//         resolve("success");
//         // reject("error")
//     });
// };

// let promm = getProm();
// promm.then((res) => {
//     console.log(res, "promise is fulfilled")
// });
// promm.catch((res) => {
//     console.log(res, "promise is rejected");
// })

// // promise chain - a prom returning a prom

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 3000);
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 3000);
//     })
// }
// // returning sec prom after 1st prom / executing proms one after one.
// // console.log("fetching data 1...");
// // asyncFunc1().then((res) => {
// //     console.log("fetching data 2...");
// //     asyncFunc2().then((res) =>{
// //         console.log(res);
// //     });
// // })

// // promise chaining
// console.log("fetching data 1...");
// asyncFunc1()
//     .then((res)=> {
//         console.log("fetching data 2...");
//         return asyncFunc2();
//     })
//     .then((res) => {
//         console.log(res);
//     });

// // async-await - always returns a promise - async kw used before a func, await pauses the execution of its surroundings async func until the promise is settled.
// //  await kw can only be used inside an async func

function api(apiId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", apiId);
            resolve("success");
        }, 2000);
    });
}

// async function getAPI(apiId) {
//     await api(apiId)
// }
// getAPI(545);

    // async function getAllApi() {
    //     await api(1);
    //     await api(2);
    //     await api(3);
    //     await api(4);
    //     await api(5);
    // }
    // getAllApi();

// iife - immediately invoked functions - called immediately as soon as it is defined. - doesnt hv to call it unlike async-await func - but cant be used elsewhere. so it is used only when it is required to execute only once.
    // method 1- (function () {
    //     ...
    // }) ();

    // method 2 - (() => {
    //     ...
    // }) ();

    // method 3 - (Async () {
    //     ...
    // }) ();

(async function () {
    await api(1);
    await api(2);
    await api(3);
    await api(4);
    await api(5);
}) ();

