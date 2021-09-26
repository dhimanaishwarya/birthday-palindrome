function reverseStr(str) {
    let listofChar = str.split('');
    let reverseListofChar = listofChar.reverse();

    let reversedStr = reverseListofChar.join('');

    // return str.split('').reverse().join('');

    return reversedStr;
}

console.log(reverseStr("aishwarya"));

function isPalindrome(str) {
    let reverse = reverseStr(str);

    // if (str === reverse) {
    //     return true;
    // } else {
    //     return false;
    // }
    return str === reverse;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("aishwarya"));

let date = {
    day: 26,
    month: 9,
    year: 2020
}

function convertDatetoStr(date) {

    let dateStr = {
        day: '',
        month: '',
        year: ''
    }

    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();
    return dateStr;
}

// return String(date.day) + String(date.month) + String(date.year);

console.log(convertDatetoStr(date));

function getDateFormats(date) {
    let dateStr = convertDatetoStr(date);

    let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    let yyddmm = dateStr.year.slice(-2) + dateStr.day + dateStr.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}





let dateOfBirth = document.querySelector("#input-date");
let button = document.querySelector("#submit-btn");
let outputText = document.querySelector("#output");

button.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    let dobInput = dateOfBirth.value;

    //if bday not empty


}