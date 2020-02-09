console.log("EXERCISE 7:");

const  Basket = function () {
    this.products = [];
    this.sum = 0;
};

Basket.prototype.addProduct = function (name, price) {
    const product = {name: name, price: price};
    this.products.push(product);
    this.sum += price;
};
Basket.prototype.showBasket = function () {
    console.log(this.products, this.sum);
};

const  aliceBasket = new Basket();
aliceBasket.addProduct("tomato",7);
aliceBasket.addProduct("cucumber",5);
aliceBasket.addProduct("radish",3);
aliceBasket.addProduct("potato",9);

aliceBasket.showBasket();