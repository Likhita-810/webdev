// for loop - runs only if the cond is true

for (let i=1; i<= 5; i++) {
    console.log(i);
}

// sum of first n numbers
let sum = 0;
for (let i = 1; i<=5; i++) {
    sum = sum +i;
}
console.log('sum of first 5 numbers',sum);

// while loop - runs only if the cond is true
let i = 1;
while (i<=10) {
    console.log(10+i);
    i++;
}

// do-while loop - atleast runs once even if cond is false.
let n = 8;
do {
    console.log(n);
    i++
} while (n > 10);
// the cond given here is false but still the stmts gets executed atleast once, as the code runs first n then it checks for the cond.

// for of loop - initialization , stopping cond nor increment is required, iterates over values of an object

let str = "likhita";
 let size = 0;
for (let i of str) {
    console.log(i);
    size ++;
}

console.log("string size: ",size);

//  for in loop - returns key, iterates over key of an object
let student = {
    name: "likhita",
    age: 26,
    cgpa: 7.75,
    isPass: true,
};
console.log(student);
for (let key in student) {
    console.log("key:", key, "value:", student[key]);
}

// practice codes

// ex-1

// print all even num from 0 - 100

for (let n = 0; n <=100; n++){
    if (n%2 == 0){
        console.log(n);
    }
}

// odd nums
for (let n = 0; n <=50; n++){
    if (n%2 !== 0){
        console.log(n);
    }
}

// ex-2
// create a game where you start with any random game num. ask the user to keep guessing the game num until the user enters correct value

    // let gameNum = 26;

    // let userNum = prompt("guess the game number: ");

    // while (userNum != gameNum) {
    //     userNum = prompt("you entered wrong number. guess again: ")
    // }
    // console.log("congrats! you entered the right number");

// strings

let strVar = 'likhita'
console.log(strVar.length);
console.log(strVar[4]);

// template literals - a way to have embedded expressions in strings
