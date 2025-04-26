// console.log(reverseString("hello")); // "olleh"

const reverseString = (str) => {
   
    let arr = str.split("e");
    return arr.reverse().join('');
}
console.log(reverseString("hello"));

// console.log(isPalindrome("racecar")); // true
const isPalindrome = (str) => {
    let arr = str.split("");
    let reverse = arr.reverse().join("");

    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('racecar'));

// console.log(isEven(4)); // true

const isEven = (num) => {
    // if (num % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // return (num % 2 == 0) ? true : false;
    return (num % 2 == 0);
}

console.log(isEven(4));

// console.log(a, b); // 10, 5
const swap = (a,b) => {
    [a,b] = [b,a];
    return [a,b];
    // let c = a, d= b;
    // temp = c;
    // c = d; d= temp;
    // return [c,d];
}
let a=5, b=10
console.log(swap(a,b));

// console.log(capitalize("hello")); // "Hello"

const capFunc = (str) => {
    let firstWord = str[0].toUpperCase();
    let word = str.slice(1);
    return firstWord+word ;
}

console.log(capFunc('hello'));

// console.log(sumArray([1, 2, 3, 4])); // 10

const sumArray = (arr) => {
    let sum = 0;
    for (i=0; i< arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4]));

// largest num in arr

const largNum = (arr) => {
    let bigNum = arr[0];
    for (i = 0; i< arr.length; i++) {
        if (arr[i] > bigNum) {
            bigNum = arr[i];
        }
    }
    return bigNum;
}

console.log(largNum([9,3,4,7,1]));

// console.log(countChar('GeeksForGeeks', 'G'));

const countChar = (str, char) => {
    // let arr = str.split("");
    // let charArr = [];
    // for (i=0; i< arr.length; i++) {
    //     if (char == arr[i]) {
    //         charArr.push(char);
    //     }
    // }
    // return charArr.length;
    let count = 0;
    for (i=0; i< str.length; i++) {
            if (char == str[i]) {
                count++;
            }
    }
    return count;
}
console.log(countChar("GeeksforGeeks", "s"));

// console.log(frequency([1, 1, 2, 3, 3, 4])); //{ '1': 2, '2': 1, '3': 2, '4': 1 }

// console.log(longestWord('GeeksForGeeks is great'));

const longestWord = (str) => {
    let words = str.split(" ");
    // let length =  words[0].length;
    // let index = 0;
    // for (i=0; i<words.length; i++) {
    //     if (length < words[i].length) {
    //         length = words[i].length;
    //         index = i;
    //     }
    // }
    // return words[index];

    let longest = "";
    for (i=0; i < words.length; i++) {
        if (longest.length < words[i].length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(longestWord("GeeksForGeeks is great"));

// console.log(countVowels("hello geek"));

const countVowels = (str) => {
    let count = 0;
    // let strVar = str.toLowerCase();
    // console.log(strVar);
    for (i = 0; i< str.length; i++) {
        // if (strVar[i] === "a" || strVar[i] === "e" || strVar[i] === "i" || strVar[i] === "o" || strVar[i] === "u") {
        //     count += 1;
        // }
        if ("aeiouAEIOU".includes(str[i])) {
            count += 1;
        };
    }
    return count;
}
console.log(countVowels("hello geek"));
console.log(countVowels("Hello geEk"));

// let numbers = [5, 6, 7];//[ 10, 12, 14 ]

const products = (arr) => {
    let mul=[];
    for (i=0; i < arr.length; i++) {
        mul.push(arr[i] *2);
    }
    return mul;
}
console.log(products([5,6,7]));

// console.log(capitalizeFirstLetter('hello geeks'));
const capitalizeFirstLetter = (str) => {
    let arr = str.split(" ");
    let newArr = [];
    for (i=0; i< arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        newArr.push(arr[i]);
    }
    return newArr.join(" ");
}
console.log(capitalizeFirstLetter("hello geeks"));

// console.log(lastElement([6, 2, 9, 5]));
const lastElement = (arr) => {
    return arr[arr.length -1];
}

console.log(lastElement([6,2,9,5]));

// console.log(uniqueCharacters("geeksforgeeks"));
const uniqueCharacters = (str) => {
    // let newStr = new Set(str);
    // let arr = new Array(...newStr);
    // return arr.join('');
    // return [...new Set(str)].join("");

    let arr = [];
    for(i=0; i< str.length; i++) {
        // if(arr.includes(str[i])) {
        //     continue
        // } else {
        //     arr.push(str[i]);
        // }

        if(!arr.includes(str[i])) {
            arr.push(str[i]);
        }
    }
    return arr.join('');
}
console.log(uniqueCharacters("geeksforgeeks"));

// console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));
const removeDuplicates = (arr) => {
    let newArr = [];
    for(i=0; i< arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));

// console.log(reverseArray([5, 6, 7, 8]));

const reverseArray = (arr) => {
    // return arr.reverse();
    let newArr = [];
    for(i=0; i<arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr; 
}
console.log(reverseArray([5, 6, 7, 8]));

// console.log(containsSubstring('GeeksForGeeks', 'For'));

const containsSubstring = (str,char) => {
    return str.includes(char);
}
console.log(containsSubstring('GeeksForGeeks', 'For'));

// console.log(findMin([5, 10, -1, 8]));

const findMin = (arr) => {
    let min = arr[0];
    for (i=0; i<arr.length; i++) {
        if(min > arr[i]) {
            min= arr[i];
        }
    }
    return min;
}
console.log(findMin([5, 10, -1, 8]));

// console.log(sortArray([5, 3, 8, 1]));

const sortArray = (arr) => {
    // return arr.sort();
    let n = arr.length;
    for(i=0; i < n -1 ; i++) {
        for(j=0;j < n-i-1 ; j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([5, 3, 8, 4, 1]));