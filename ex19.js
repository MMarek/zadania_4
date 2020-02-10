console.log("EXERCISE 19:");

function concatArray(arr1, arr2) {
    arr = [];
    newArr = arr.concat(arr1,arr2);
    return newArr;
};

console.log(concatArray([1,3,5,7,9],[2,4,6,8,10]));