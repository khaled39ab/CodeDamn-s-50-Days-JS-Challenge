//problem
// Write a function which can convert the time input given in 12 hours format to 24 hours format
// The check for 'AM' and 'PM' can be verified using endsWith String method
// An extra 0 would be needed if the hours have single digit

const time = '06:10PM';

function convertTo24HrsFormat(time) {
    let newTime;

    if (time.length > 7 || time.length < 6) {
        newTime = "Wrong Input";
    }
    else {

        if (time.length === 6) {
            if (time.charAt(2) == ":") {
                time = time.slice(0, 3) + "0" + time.slice(3)
            }
            else {
                time = "0" + time;
            }
        }

        if (time.slice(-2) == "AM") {
            if (time.slice(0, 2) == "12") {
                newTime = "00" + time.slice(2, 5);
            }
            else {
                newTime = time.slice(0, 5);
            }
        }
        else {
            if (time.slice(0, 2) == "12") {
                newTime = time.slice(0, 5);
            }
            else {
                let hr = (Number(time.slice(0, 2)) + 12).toString();
                newTime = hr + time.slice(2, 5);
            }
        }
    }

    return newTime;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)