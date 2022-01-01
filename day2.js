const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    const reverse = str.split ('').reverse().join ('');
    return reverse;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
