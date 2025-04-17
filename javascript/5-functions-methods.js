// functions - block of code that performs specific task, can be invoked(called) whenever needed
// reduces the redundancy (repeatition) to minimize the code
// 2 steps - func definition, func calling
// 
function funcName() {
    console.log('sample func');
}

funcName();

// 
function funcParam(msg) { // var inside def is called parameter, act as local variables of func, block scope.
    console.log(msg);
}

funcParam('im learning js'); // var inside func calling is called argument

// 
function sum(a,b) {
    console.log(a+b);
}
sum(4,5);

// 
function product(a,b) {
    s = a*b;
    return s;
}

console.log(product(5,7));

// arrow functions - compact way of writing a func
const mul = (x,y) => {
    console.log(x*y)
}

console.log(mul);
mul(2,8);

// 
const div = (a,b) => {
    return a/b;
}
console.log(div(45,78));

// create a  func using the function kw that takes a string as an argument and returns the number of vowels in the string

function countVowels(str) {
    let count = 0;
    for(let char of str) {
        if(char=='a' || char=='e' || char== 'i' || char=='o' || char== 'u') {
            count++
        }
    }
    console.log(count);
}

countVowels('likhita');

// arrow func to perform the same task

const vowelsCount = (str) => {
    let count = 0;
    for(let char of str) {
        if('aeiou'.includes(char)) {
            count++
        }
    }
    console.log(count);
}

vowelsCount('benerje');

// forEach loop in arrays - higher order func/methods
// arr.forEach(callBackFunc) , callBack is a func passed as an argument to another func, callBAckFunc is a func that executes for each ele in an array

// func attached to any object or data structure is refered as method

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val) {
    console.log(val);
})

// func passed as an arg for forEach func doesnt hv to be called. forEach calls the the call back func by itself even without invoking it seperately.

// call back func takes 3 parameters- value, index, array itself
let arrPar = [1,2,3,4,5];
arrPar.forEach(function printVal(val, index, arr) {
    console.log(val, index, arr);
})

// higher order functions - either takes a func as a parameter or returns a func

// ex- for a given array of nums, print the square of each value using the forEach loop

let numArr = [1,2,3,4,5,6,7];
numArr.forEach(function square(val) {
    sqr = val ** 2;
    console.log(sqr);
})

let nums = [9,8,7,6];

let calcSqr = (num) => {
    console.log(num**2);
}

nums.forEach(calcSqr);

// map - creates a new array from the values returned by the call back func
nums.map((val)=> {
    console.log(val);
})

let newNums = nums.map((val)=> {
    return val * 3;
})

console.log(newNums);

// filter - creates a new array of ele that satisfies the given cond

let numArray = [1,2,3,4,5,6,7,8];
let evenArr = numArray.filter((val) => {
    return val%2 ==0;
})
console.log(evenArr);

// reduce - reduces the array to a single value
let output = numArray.reduce((prev, currentValue) => {
    return prev + currentValue;
});
console.log(output);

// find largest ele

let eles = [3,4,6,7,2];

const res = eles.reduce((prev, curr) => {
    return prev > curr? prev : curr;
})

console.log(res);

// ex- we are given array of marks of students. filter out the marks of students who scored above 90.

let marks = [78,65,90,87,95,86];
let topMarks = marks.filter((val) => {
    return val>=90;
})

console.log(topMarks);

//  ex- take a num n as input form user. create an array from 1 -n. use reduce method to calculate the sum of all nums in array. use reduce method to cal product of all num in array.

let userNum = prompt("enter a num: ");
let userNumArr = [];

for (let i=1; i<=userNum; i++) {
    userNumArr[i-1] = i;
}
console.log(userNumArr);

let sumArr = userNumArr.reduce((prev, curr) => {
    return prev+curr;
})

console.log(sumArr);

let factorial = userNumArr.reduce((prev, curr) => {
    return prev* curr;
})
console.log(factorial);