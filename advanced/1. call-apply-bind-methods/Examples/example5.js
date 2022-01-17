//Call(), Apply() and Bind() Method এর জন্য উদাহরণ
//Live Example: https://jsfiddle.net/rijans/6tnejcLa/7/

//.call() Method এর দুটি উদাহরণ:
//.call() method এর প্রথম উদাহরণ
let bike = {
    name: 'Suzuki Gixxer SF'
}

let getBikeInfo = function (ccValue) {
    return this.name + " is " + ccValue + " CC.";
}

console.log(getBikeInfo.call(bike, 150));
//Output: Suzuki Gixxer SF is 150 CC.

//.call method এর দ্বিতীয় উদাহরণ
function MotorBike(wheelCount, engineCount){
    this.wheels = wheelCount;
    this.engines = engineCount;
}

function GixxerSF(wheelCount, engineCount, engineCC, brand){
    MotorBike.call(this, wheelCount, engineCount);
    this.engineCC = engineCC;
    this.brand = brand;
}

let newGixxerSF = new GixxerSF(2,1, 150, 'Suzuki');
console.log(newGixxerSF);
//ফলাফল:
// {
//     brand: "Suzuki",
//     engineCC: 150,
//     engines: 1,
//     wheels: 2
// }



//.apply() Method এর উদাহরণ:
function bicycle(wheelCount, engineCount){
    this.wheels = wheelCount;
    this.engines = engineCount;
}

function bicycleModelX(wheelCount, engineCount, brand){
    MotorBike.apply(this, arguments);
    this.brand = brand;
}

let newBicycleModelX = new bicycleModelX(2,0, 'Phonix');
console.log(newBicycleModelX);
//ফলাফল::
//{
//    brand: "Phonix",
//    engines: 0,
//    wheels: 2
//}



//.bind() Method এর উদাহরণ
let biker = {
    name: 'Jaber Al Nahian'
}

let getBikerInfo = function (bikeModel) {
    return this.name + ' use '+ bikeModel;
}

let bikerInfo = getBikerInfo.bind(biker);

console.log(bikerInfo);
//ফলাফল হবে betBikerInfo এর Function definition

// f (bikeModel) {
//     return this.name + ' use '+ bikeModel;
// }
console.log(bikerInfo('Suzuki Gixxer SF'));
//ফলাফল
// Jaber Al Nahian use Suzuki Gixxer SF
