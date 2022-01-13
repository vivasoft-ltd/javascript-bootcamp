
Consider the code below. Why 'orange' object can still access
all the property even though 'fruit' is deleted?

```javascript
let fruit = {
    name: "Mango",
    price: 200,
    extra: {
        weight: "2 kg",
        color: "red"
    }
}

let orange = fruit;
let mango = fruit.extra;

fruit = null;
mango = null;
console.log(orange.name)
```