Consider the code snippet below. Now suppose I want to create multiple car objects which might have some new properties. All the car objects must have the 'getCarBrand'
and 'getCarPrice' methods as it's property. But i don't want these 2 methods to be recreated in the memory every time a car object is created. How can you achieve this? 


```javascript
let car = {};
car.brand = 'Toyota';
car.price = 2000000;
car.getCarBrand = function () {
    return this.brand;
}

car.getCarPrice = function () {
    return this.price;
}

console.log(car.getCarBrand());
console.log(car.getCarPrice());
```
