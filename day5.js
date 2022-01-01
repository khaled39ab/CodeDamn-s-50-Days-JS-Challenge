// Problem
// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
// indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively
// If the match is not found, these methods return -1

const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    const firstIndex = str.indexOf ('X');
    const lastIndex = str.lastIndexOf ('X');

    if (firstIndex === -1){
        return -1;
    }

    const gapBetweenX = lastIndex - firstIndex;
    return gapBetweenX;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)