console.log("EXERCISE 2:");

function task3() {
    const add = {
        tytuł: 'Tytuł książki',
        author: 'Autor książki',
        numbersOfPages: 1200
    };

    console.log(
        add.tytuł,
        add.author,
        add.numbersOfPages
    );
}

task3();

function task4() {
    const  person = {
        name: 'Mark',
        age: '32',
        sayHello: function () {
            console.log("hello");
        }
    };

    console.log(
        person.name,
        person.age,
        person.sayHello(),
        );
}

task4();