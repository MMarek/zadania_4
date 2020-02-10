console.log("EXERCISE 11:");

function getNumber(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        answer = '';
        if(arr[i] === num) {
            answer = true;
            break;
        }else answer = false;
    }
    console.log(answer);
}

getNumber(5,[2,4,6,8,10,15,20]);
getNumber(15,[2,4,6,8,10,15,20]);