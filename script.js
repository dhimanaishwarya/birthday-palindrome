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







let dateOfBirth = document.querySelector("#input-date");
let button = document.querySelector("#submit-btn");
let outputText = document.querySelector("#output");

button.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    let dobInput = dateOfBirth.value;

    //if bday not empty


}