// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const twoNumSum = (arr, target) =>{
//     let n = arr.length;
//     // for(i=0;i<n;i++) {
//     //     for(j=i+1; j<n; j++) {
//     //         if(arr[i] + arr[j] == target) {
//     //             return [i,j];
//     //         }
//     //     }
//     // }
//     let map = {};
//     for (i=0; i < n; i++) {
//         let compliment = target - nums[i];

//         if(map.hasOwnProperty(compliment)) {
//             return [map[compliment],i];
//         }
//         map[nums[i]]=i;
//     }
// }
// console.log(twoNumSum([3,2,4], 6));

var isPalindrome = function(x) {
    let rev = 0;
    let temp = x;
    if (x<0) {
        return false;
    } else {
        while (temp != 0) {
        let firstNum = temp % 10;
        temp = Math.floor(temp/10); 
        rev = (rev*10) + firstNum; 
    }
    return (rev == x);
    }
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));

// roman to integer
var romanToInt = function(s) {
    let obj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let total = 0;
    for(i=0; i< s.length; i++) {
        const currentVal = obj[s[i]];
        const nextVal = obj[s[i+1]];

       (nextVal > currentVal) ? total -= currentVal : total += currentVal;
    }
    return total;
};
console.log(romanToInt("VII"));

// cmn prefix in string
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function(strs) {
    console.log(strs);
   
    let prefix = "";
    if (strs.length == 0) {
        return "";
    } else {
        for(i=0; i< strs[0].length; i++) {
            const currChar = strs[0][i];
            for(j=1; j<strs.length; j++) {
                if (currChar !== strs[j][i]) {
                    return prefix;
                }
            }
            prefix += currChar;
        }
        return prefix;
    }
};
console.log(longestCommonPrefix(["flower","flow","flight","fight"]));
