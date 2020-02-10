console.log("EXERCISE 16:");

const getLastNumber = function (num, array) {
    if (typeof (num) === 'number') {

        const newArray = [];
        for (let i = array.length - num; i < array.length; i++) {

            newArray.push(array[i]);
        }
        return newArray;
    } else {
        return [];
    }
};

console.log(getLastNumber(2,[1,2,3,4,5,6,7,8,9,10]));
console.log(getLastNumber(4,[1,2,3,4,5,6,7,8,9,10]));
console.log(getLastNumber([1,2,3,4,5,6,7,8,9,10]));
console.log(getLastNumber('Marjusz',[1,2,3,4,5,6,7,8,9,10]));