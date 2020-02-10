console.log("EXERCISE 15:");

function getMissingElement(arrayNumbers) {
    for (let i = 0; i < arrayNumbers.length - 1; i++) {
        if(arrayNumbers[i] + 1 !== arrayNumbers[i + 1]) {
            return arrayNumbers[i] + 1;
        }
        if (arrayNumbers[i] + 1 === 0) {}
    }
    return null;
}

console.log(getMissingElement([1,2,3,4,5,6,7,8,9,10]));
console.log(getMissingElement([11,12,13,14,15,17,18,19,20]));
console.log(getMissingElement([-5,-3,-2,-1,0,1,2,3,4,5]));