console.log("EXERCISE 5:");

const calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },

    sum: function () {
        return this.a + this.b
    },

    sub: function () {
        return this.a - this.b
    },

    multiply: function () {
        return this.a * this.b
    },

    division: function () {
        return this.a / this.b
    }
};

calculator.save(9,5);
console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.multiply());
console.log(calculator.division());
