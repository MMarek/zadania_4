console.log("EXERCISE 9:");

const Calculator = function () {
    this.operations = [];
};

Calculator.prototype.add = function (num, num2) {
    const result = num + num2;
    const text = (`added ${num} to ${num2} got ${result}`);
    this.operations.push(text);
};

Calculator.prototype.multiply = function (num, num2) {
    const result = num * num2;
    const text = (`multiply ${num} to ${num2} got ${result}`);
    this.operations.push(text);
};

Calculator.prototype.subtract = function (num, num2) {
    const result = num - num2;
    const text = (`subtracted ${num} to ${num2} got ${result}`);
    this.operations.push(text);
};

Calculator.prototype.divided = function (num, num2) {
    const result = num / num2;
    const text = (`divided ${num} to ${num2} got ${result}`);
    this.operations.push(text);
};

Calculator.prototype.printOperations = function () {
    for (let i = 0; i < this.operations.length; i++) {
        console.log(this.operations[i]);
    }
};

Calculator.prototype.clearOperations = function () {
    this.operations = [];
};


let calc = new Calculator();
calc.add(8,8);
calc.multiply(8,8);
calc.subtract(8,8);
calc.divided(8,8);
calc.printOperations();
