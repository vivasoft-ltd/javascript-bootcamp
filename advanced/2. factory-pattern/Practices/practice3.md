Consider the below code where we have created two PC builds using factory pattern. How can you improve this code by using
the factory design pattern with dynamic values as parameters?

```javascript
function pc1() {
    return {
        manufacturer: "ASUS",
        cpu: "Intel Core i9 11900",
        ram: "Corsair 16GB 3200 GHz",
        buildPC: function () {
            console.log('A PC with manufacturer ' + this.manufacturer + ' CPU ' + this.cpu + ' RAM ' + this.ram + ' is built!');
        }
    }

}

function pc2() {
    return {
        manufacturer: "MSI",
        cpu: "Apple M1 Pro Max",
        ram: "TSC 16GB 3600GHz",
        buildPC: function () {
            console.log('A PC with manufacturer ' + this.manufacturer + ' CPU ' + this.cpu + ' RAM ' + this.ram + ' is built!');
        }
    }
}

let newPC1 = pc1();
console.log(newPC1.buildPC());

let newPC2 = pc2();
console.log(newPC2.buildPC());


```