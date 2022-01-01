//Problem

// Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(startRange, endRange) {
    // write your solution here
    const randomNum = Math.round(Math.random() * (endRange - startRange));
    return startRange + randomNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
