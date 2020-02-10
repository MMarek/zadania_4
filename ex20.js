console.log("EXERCISE 20:");

function checkPalindrom(myString) {
    myString = myString.toUpperCase();
    let newString = myString.split("").reverse().join("");

    return myString === newString
}

console.log(checkPalindrom("kajak"));
console.log(checkPalindrom("czarne kropki"));