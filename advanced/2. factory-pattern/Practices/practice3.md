নিচের কোড টি খেয়াল করুন। এটাতে factory pattern ব্যাবহার করা হয়েছে। আপনি কিভাবে এটাকে আর ভাল করতে পারেন? সাথে dynamic parameters দিয়ে?

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