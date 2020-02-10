console.log("EXERCISE 14:");

function factors(oneNumber) {
    let randomArray = [];

    if(oneNumber <= 0) {
        return randomArray;
    }else{
        for (let i = oneNumber; i >=1 ; i--) {
            if(oneNumber % i === 0) {
                randomArray.push(i);
            }
        }
        return randomArray;
    }
}

console.log(factors(2));
console.log(factors(154));
console.log(factors(-2));