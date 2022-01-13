{
    /*
    We can achieve constructor chaining by using call() and apply().
    We can pick common properties from another constructor function
    to be included in our new constructor function by using these methods.
    */
}

function Food(name, price) {
    this.name = name;
    this.price = price;
}

function Burger(name, price) {
    Food.call(this, name, price);
    this.category = "fastfood";
}

function Brownie(name, price) {
    Food.call(this, name, price);
    this.category = "dessert";
}

burger = new Burger("Hamburger", "300");
brownie = new Brownie("Chocolate brownie", "200");
console.log(burger);
console.log(brownie);

{
    /*
    Output:
        {
            category: "fastfood"
            name: "Hamburger"
            price: "300"
        }
        {
            category: "dessert"
            name: "Chocolate brownie"
            price: "200"
        }
    */
}

// The same behavior can also be achieved by using the apply() method
function Pizza(name, price) {
    Food.apply(this, [name, price]);
    this.category = "fastfood";
}

pizza = new Pizza("Pepperoni Pizza", "500");

console.log(pizza);

{
    /*
    Output:
        {
            category: "fastfood"
            name: "Pepperoni Pizza"
            price: "500"
        }
    */
}



