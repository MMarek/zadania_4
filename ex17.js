console.log("EXERCISE 17:");

function Tree(type) {
    this.first = type;
}

Tree.prototype.bloom = function () {
    console.log('I am blooming', this.first)
};

let tree1 = new Tree("Oak");
let tree2 = new Tree("Birch");
let tree3 = new Tree("Pine");

tree1.bloom();
tree2.bloom();
tree3.bloom();