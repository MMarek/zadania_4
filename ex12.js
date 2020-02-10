console.log("EXERCISE 12:");

function addTheSameNumbers(num, arr) {
    let sum = null
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            sum += arr[i]
        }
    }
    console.log(sum);
}

addTheSameNumbers(2,[2,4,6,8,4,10,4,1,5,7,9]);
addTheSameNumbers(3,[2,4,6,8,4,10,4,1,5,7,9]);
addTheSameNumbers(4,[2,4,6,8,4,10,4,1,5,7,9]);
