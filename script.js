//ex1
function reverseStr(str) {
    let listofChar = str.split('');
    let reverseListofChar = listofChar.reverse();

    let reversedStr = reverseListofChar.join('');

    // return str.split('').reverse().join('');

    return reversedStr;
}

//ex2
function isPalindrome(str) {
    let reverse = reverseStr(str);

    // if (str === reverse) {
    //     return true;
    // } else {
    //     return false;
    // }
    return str === reverse;
}

let date = {
    day: 26,
    month: 9,
    year: 2020
}

//ex3
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

//ex4
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

//ex5
function checkPalindromeForDateFormats(date) {
    let listOfPalindromes = getDateFormats(date);
    let isPalindromeflag = false;

    for (let i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            isPalindromeflag = true;
            break;
        }
    }
    return isPalindromeflag;
}

function isLeapYear(year) {
    if (year % 400 === 0) return true;

    if (year % 100 === 0) return false;

    if (year % 4 === 0) return true;

    return false;
}

function getNextDate(date) {
    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month = 3;
            }
        } else {
            if (day > 28) {
                day = 1;
                month = 3;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };
}

function getPreviousDate(date) {
    // -1 for the previous day
    let day = date.day - 1;
    let month = date.month;
    let year = date.year;

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === 0) {
        month--;

        if (month === 0) {
            year--;
            month = 12;
            day = 31;
        }
        // check for february
        else if (month === 2) {
            // check for leap year
            if (isLeapYear(year)) {
                day = 29;
            } else {
                day = 28;
            }
        }
        // check for other months
        else {
            day = daysInMonth[month - 1];
        }
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

//ex6
function getNextPalindromeDate(date) {
    let nextDate = getNextDate(date);
    let counter = 0;

    while (true) {
        counter++;
        let isNextDatePalindrome = checkPalindromeForDateFormats(nextDate);
        if (isNextDatePalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [counter, nextDate];
}

console.log(getNextPalindromeDate(date));

// additional ex
function getPreviousPalindromeDate(date) {
    let dayPreviousPalindromeDate = 0;
    let previousDate = getPreviousDate(date);

    while (true) {
        dayPreviousPalindromeDate++;
        let isPreviousDatePalindrome = checkPalindromeForAllDateFormats(previousDate);
        if (isPreviousDatePalindrome) {
            break;
        }
        previousDate = getPreviousDate(previousDate);
    }

    return [dayPreviousPalindromeDate, previousDate];
}


let dateOfBirth = document.querySelector("#input-date");
let button = document.querySelector("#submit-btn");
let outputText = document.querySelector("#output");

button.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    let dobInput = dateOfBirth.value;

    //if bday not empty


}