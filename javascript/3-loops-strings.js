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

// strings - immutable- cant be changed.

let strVar = 'likhita'
console.log(strVar.length);
console.log(strVar[4]);

// template literals - a way to have embedded expressions in strings
// written using ``

let obj = {
    item: 'pen',
    price: 10,
}

console.log("the cost of", obj.item, "is", obj.price, "rupees");
// using template literals
// string interpolation: to create string by substituting placeholders
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

console.log(`the sum of first three numbers is ${1+2+3}`);

// escape characters
// \n- new line , \t - tab space, 

// string methods - builtin funcs to manipulate a string, methods doesnt change the original value but creates a new string
let strMethods = "         Likhita   Konathala     ";
console.log(strMethods.toUpperCase());
console.log(strMethods.toLowerCase());
console.log(strMethods.trim()); //removes white spaces from start and end but not the spaces btw the string
console.log(strMethods.slice(0,15)); // returns part of string (start index is inclusive and end index is non inclusive)
console.log(str.concat(strMethods)); //str1+str2
console.log(strMethods.replace("K", 'k'));
let str3 = 'hellOOOOOOO';
console.log(str3.replace('O','o')); // replaces only first value
console.log(str3.replaceAll('O', 'o')); // replaces all start values with the new value
console.log(str3.charAt(0));

// ex
// prompt the user to enter thier full name. generate a username for them based on the input. start username with @, followed by ythier full name and ending with the fullname length

let fullName = prompt("please enter your full name (without spaces) to generate username");
// let userName = '@'+ fullName+fullName.length;
// let userName = '@'.concat(fullName, fullName.length);
let userName = '@' + fullName.concat(fullName.length);
console.log(userName);


