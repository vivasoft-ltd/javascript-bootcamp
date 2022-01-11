{
    /*
        In the example below, we have used constructors with prototype.
        Just like any other objects in javascript, functions also contain 'prototype'
        objects.
        The two car objects (car1 and car2) that we created here will contain the same 
        instance of the 'toString' property that we added to the 'prototype' object of 'Car'.
    */
}
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  Car.prototype.toString = function () {
    return this.brand + ' ' + this.model + " is worth " + this.price + " tk";
  };

  car1 = new Car('Toyota', 'Corolla', 2000000);
  car2 = new Car('Lamborghini', 'Silhouette',  30000000);

  console.log(car1.toString());
  console.log(car2.toString());

  {
      /*
      Output:
        Toyota Corolla is worth 2000000 tk
        Lamborghini Silhouette is worth 30000000 tk
      */
  }


