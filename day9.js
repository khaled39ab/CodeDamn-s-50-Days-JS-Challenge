// Problem
// Write a function to check if an object is empty or not in javaScript?
// How to check if an object is empty or not in javaScript?
// isEmpty({}) returns true
// isEmpty({key: 1}) returns false

const obj = {  };

function isEmpty(obj) {
    // write your solution here

    return Object.keys(obj).length == 0;
    // return Object.entries(obj).length == 0; //return true/false
}

console.log(`is empty object: ${isEmpty(obj)}`)