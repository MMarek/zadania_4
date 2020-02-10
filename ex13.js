console.log("EXERCISE 13:");
const ages = [
    {
        name: 'Marjusz',
        age: 32
    },
    {
        name: 'Michał',
        age: 14
    },
    {
        name: 'Maciej',
        age: 35
    },
    {
        name: 'Adam',
        age: 27
    },
    {
        name: 'Janusz',
        age: 8
    },
    {
        name: 'Paweł',
        age: 42
    },
];


function sortAges(ages) {
    ages.sort(function (a,b) {
        return b.age - a.age
    });
    return ages
}

const result = sortAges(ages);
console.log(result);