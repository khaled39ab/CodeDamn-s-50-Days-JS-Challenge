// Problem 
// Write a function to truncate a string to a certain number of words
// Truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here

    const truncate = str.split (' ').splice (0, wordLimit).join (' ');  
    return truncate;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)