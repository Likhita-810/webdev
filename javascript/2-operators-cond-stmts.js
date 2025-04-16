// arithmatic opertors

const a = 4;
const b = 8;
console.log("a +b", a+b);
console.log('a - b', a-b);
console.log('a * b', a*b);
console.log('a / b', a/b);
console.log('a % b', a%b);
console.log('a ** b', a**b);

// unary operations cant be applied on const variables.
let c = 6;
let d = 3;
// d = d + 1;
console.log('d++',  d++);
// c = c - 1
console.log('c--', c--);

let e = 8;
console.log('before increment', e);
console.log('post increment', e++); //value now will be 8 and it will increase in the next step
console.log('after increment', e);

let f = 7;
console.log('initial value', f);
console.log('pre increment', ++f); //value will first increase by 1
console.log('final value', f);

// assignment operators =, +=, -=, *=, /=, %=, **=

e += 7;
console.log(e) // e = e + 7

// comparison operators ==, !=, ===, !==, <, <=, >, >= , output is a boolean value 
console.log(d > f);
console.log(a !== f);

// logical operators- &&, ||, ! - output is a boolean value
console.log((a>b) && (c>d));
console.log((a>b) || (c>d));
console.log(!(c>d));

// conditional statements

// if stmt
// ex-1
let age = 26;
if(age>18) {
    console.log("you are eligible to vote");
}

if(age<18) {
    console.log("you are not eligible to vote");
}

// ex-2
let mode = 'dark';
let color;

if (mode == 'dark') {
    color = 'black';
}

if (mode == 'light') {
    color = 'white';
}

console.log(color);

// if-else stmt
if (age >=18) {
    console.log("you are eleigible to drive");
}
else {
    console.log("you cant get driving license");
}

// 
let clr;

if (mode == 'dark') {
    color = 'black';
}
else {
    color = "white";
}

console.log(color);


// odd/ even
let num = 10;

if (num % 2 == 0) {
    console.log('even number');
}
else {
    console.log("odd number");
}

// else-if stmts
if (age <18) {
    console.log("teenager");
} else if (age > 60) {
    console.log("senior citizen");
} else {
    console.log("middle");
}

// ternary operator - compact if-else stmt
let result = (age >= 18) ? "adult" : "not adult";
console.log(result);

// switch-case:

const fruit = 'banana';
switch (fruit){
    case 'apple':
        console.log("an apple a day keeps a doc away");
        break;
    case 'banana':
        console.log("bananas are good remedy for constipation");
        break;
    case 'carrot':
        console.log("carrots are good for vision");
        break;
    default:
        console.log("Oops! we dont have information about the fruit you asked.");
}

// get user to input a num using prompt(). check if the num is a multiple of 5 or not.

// alert - gives a pop up - one time pop up
// prompt - gives a message and also takes an input, that can be saved in a var and used for further code

let inputNum = prompt("enter a number:");

if (inputNum % 5 == 0) {
    console.log("given number", inputNum, "is a multiple be 5");
} else {
    console.log("given number", inputNum, "is not a multiple of 5");
}

//  write a code which can give grades to students according to their scores
// 80-100, A; 70-89, B; 60-69, C; 50-59, d; 0-49, f;

let score = prompt("enter your score: ");

// if (score >= 80 && score <=100) {
//     console.log("you secured 'A' grade")
// } else if (score >=70 && score <=89) {
//     console.log("you secured 'B' grade");
// } else if (score >=60 && score <=69) {
//     console.log("you secured 'C' grade");
// } else if (score >=50 && score <= 59) {
//     console.log("you secured 'D' grade");
// } else if (score>=0 && score <=49) {
//     console.log("better luck next time.");
// } else {
//     console.log("please enter a valid score between 0-100");
// }
let grade;
if (score >= 80 && score <=100) {
    grade = "A";
} else if (score >=70 && score <=89) {
    grade = "B";
} else if (score >=60 && score <=69) {
    grade = "C";
} else if (score >=50 && score <= 59) {
    grade = "D";
} else if (score>=0 && score <=49) {
    grade = "F";
} else {
    console.log("please enter a valid score between 0-100");
}

console.log("you secured", grade, 'grade');

