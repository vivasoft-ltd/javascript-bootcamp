//Prototype মেথড ব্যাবহার করে object construct করার উদাহরণ
//Live: https://jsfiddle.net/rijans/z0mecdv3/

function CustomBike(cc, bikeType, headlightType) {
    this.cc = cc;
    this.bikeType = bikeType;
    this.headlightType = headlightType;
    // this.buildBike = function () {
    //     return 'A Bike with CC ' + this.cc + ', type ' + this.bikeType + ' and Headlight ' + this.headlightType + ' is built!'
    // }
    //আমরা উপরের function কে prototype হিসাবে যোগ করব
}

CustomBike.prototype.buildBike = function () {
        return 'A Bike with CC ' + this.cc + ', type ' + this.bikeType + ' and Headlight ' + this.headlightType + ' is built!'
}

const pc1 = new CustomBike('150', 'Sports', 'LED Projector');
console.log(pc1.buildBike());
//ফলাফল: A Bike with CC 150, type Sports and Headlight LED Projector is built!"

const pc2 = new CustomBike('150', 'Commuter', 'LED Regular');
console.log(pc2.buildBike());
//ফলাফল: A Bike with CC 150, type Commuter and Headlight LED Regular is built!"