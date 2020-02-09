console.log("EXERCISE 4:");

const car = {
    brand: "Fiat",
    color: "red",
    nrOfKilometers: 0,
    printCarInfo: function () {
        console.log(
            this.brand,
            this.color,
            this.nrOfKilometers
        )
    },
    drive: function (km) {
        this.nrOfKilometers += km;
    }
};

car.printCarInfo();
car.drive(120);
car.drive(180);
car.printCarInfo();


car.inspections = ["2019 - 01", "2018 - 03"];
car.addInspection = function (date) {
    this.inspections.push(date);
};

car.addInspection('2020-1');
console.log(car.inspections)

car.getInspections = function () {
    return this.inspections
};
console.log(car.getInspections());
