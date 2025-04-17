// arrays are linear, mutable, has index values

let marks = [74,85,67,96,76,94];
console.log(marks.length);
console.log(marks[2]);
console.log(marks[10]); // accessing an item from index that isnt assigned in the array gives undefined output
marks[3] = 94;
console.log(marks);

// looping over an array

for (let i=0; i< marks.length; i++) {
    console.log(marks[i]);
}

// for of (iteration over values of an array object)
for (let value of marks) {
    console.log(value);
}

// ex- for a given array with marks of students 85, 97, 44, 37, 76, 60. find the avg of marks.

let studentMarks = [85,97,44,37,76,60];
let sum = 0;
for (let val of studentMarks) {
    sum += val;
}
let avg = sum / studentMarks.length;
console.log(`the avegrage of given marks is ${avg}`);

// for a given array with prices of 5 items 250, 645, 300,900, 50. all items have an offer of 10% off on them. change the array to store final price after applying offer.

        // let prices = [250, 645, 300, 900, 50];
        // console.log(prices);
        // let index = 0;
        // let value;
        // for (let val of prices) {
        //     let offer = val / 10;
        //     prices[index] = prices[index] - offer;
        //     // console.log(`cost after applying offer ${prices[index]}`);
        //     index++;
        // }
        // console.log(prices);

let prices = [250, 645, 300, 900, 50];
console.log(prices);
for (let i = 0; i< prices.length; i++) {
    let offer = prices[i] /10;
    prices[i] -= offer;
}
console.log(prices);

// array methods
// push() - add to end, pop() - delete from end and return, toString() - converts array to string

let menu = ['french fries', 'crispy corn', 'mojito'];
console.log(menu);
menu.push('apricot delight');
console.log(menu);
let delItem = menu.pop();
console.log(menu);
console.log(delItem);

console.log(menu.toString()); // doesnt change the array. it only returns the array as a string 
console.log(menu);

// concat() - joins multiple arrays and returns result
// unshift() - add to start
// shift() - delete from start and return
console.log(studentMarks);
studentMarks.unshift(67);
console.log(studentMarks);
let delMarks = studentMarks.shift();
console.log(studentMarks);
console.log(delMarks);

// slice - returns a piece of the array - doesnt change the original array
console.log(studentMarks.slice(1,5));
// splice - changes the original array, arr.splice(startINdex, delCount, newEle), new elements will be added from the index mentioned
let arr = [1,2,3,4,5,6];
console.log(arr);
arr.splice(2,1); // returns the deleted item from the array
console.log(arr);
arr.splice(3,2,64,87,65);
console.log(arr);

// create an array to store companies - bloomberg, microsoft, uber, google, ibm, netflix
// a. remove the first company from the array
// b. remove uber and add ola on its place
// c. add amazon at the end

let companies = ['bloomberg', 'microsoft', 'uber', 'google', 'ibm', 'netflix'];
console.log(companies);
companies.shift();
companies.splice(1,1, 'ola');
companies.push('amazon');
console.log(companies);