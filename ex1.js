console.log("EXERCISE 1 - OBIEKT 1:");

function task1() {
    const country = {
        capital: 'somewhere',
        population: 1234,
        president: 'someone',
        primeMinister: ['something', 'somehow']
    };
    console.log(
        country.capital,
        country.population,
        country.president,
        country.primeMinister
    )
}
task1();

console.log("EXERCISE 2 - OBIEKT 2:");

function task2() {
    const timeMachine = {
        shape: 'napis',
        model: 'model',
        run: function (date, place) {
            console.log(date, place)
        }
    };
    console.log(
        timeMachine.shape,
        timeMachine.model);

    timeMachine.run(1998,'Poland')
}

task2();