Consider the below code snippet. Try to guess which design pattern was used in this code.
Convert this code to implement the same functionailty by using Constructor pattern.

```javascript
function createVehicle(brand, model, price) {
    const vehicle = {
        brand: brand,
        model: model,
        price: price,
        printVehicleDetails: () => {
            console.log("Brand: " + brand + "\n" 
            + "Model: " + model + "\n"
            + "Price: " + price + " tk");
        }
    }

    return vehicle;
}

const vehicle1 = createVehicle("Toyota", "Corolla", "2000000");
vehicle1.printVehicleDetails();
```