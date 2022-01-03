// problem
// Write a function which accepts two valid dates and returns the difference between them as number of days
// The difference between 2 dates in JavaScript will give the time difference in milliseconds
// Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here

    const date1 = new Date (dateText1);
    const date2 = new Date (dateText2);
    const diff = Math.abs(date2 - date1);
    return diff / DAY_IN_MILLISECONDS;
}

console.log(`Days difference: ${getDaysBetweenDates('06/25/1995', '11/10/2022')}`)
