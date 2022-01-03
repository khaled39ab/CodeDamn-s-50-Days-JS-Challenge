// Problem
// Create a regular expression to validate if the given input is valid Bangladeshi mobile number or not
// Regular expression check has to have an optional +88 or 01 in the beginning, then an optional space and 10 digits
// test method of regular expression can be used to validate if the mobile number pattern matches or not

const number = '+880 1758033448';

function validateMobile(number) {
    // write your solution here
    let trueNumber;
    if ( number.length < 11 || number.length > 15 ){
        trueNumber = "Wrong Input";
    }
    else {
        if (number.slice (0, 2) == "01" && number.length == 11){
            trueNumber = "Number is Right";
        }
        else if(number.charAt (3) == " " || number.charAt(4) == " " && number.length == 15){
            trueNumber = "Number is Right";
        }
        else if (number.slice(0, 5) == "+8801" && number.length == 14){
            trueNumber = "Number is Right";
        }
        else {
            trueNumber = "Wrong Input";
        }
    }
    return trueNumber;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)