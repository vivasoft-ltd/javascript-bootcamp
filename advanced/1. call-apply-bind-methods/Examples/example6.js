//Call(), Apply() and Bind() Method এর জন্য উদাহরণ
//Live Example: https://jsfiddle.net/rijans/806Lbwue/14/

//.call() Method এর দুটি উদাহরণ:
//.call() method এর প্রথম উদাহরণ
let car = {
    name: 'Mitsubishi Lancer X'
}

let getCarInfo = function (ccValue) {
    return this.name + " is " + ccValue + " CC.";
}

console.log(getCarInfo.call(car, 150));
//ফলাফল: Suzuki Gixxer SF is 150 CC.

//.call method এর দ্বিতীয় উদাহরণ
function Car(wheelCount, engineCount){
    this.wheels = wheelCount;
    this.engines = engineCount;
}

function LancerX(wheelCount, engineCount, engineCC, brand){
    Car.call(this, wheelCount, engineCount);
    this.engineCC = engineCC;
    this.brand = brand;
}

let newLancerX = new LancerX(4,1, 1500, 'Mitsubishi');
console.log(newLancerX);
//ফলাফল:
// {
//     brand: "Mitsubishi",
//     engineCC: 150,
//     engines: 1,
//     wheels: 2
// }



//.apply() Method এর উদাহরণ:
function NoteBook(ramCapacity, processorDetail){
    this.ram = ramCapacity;
    this.cpu = processorDetail;
}

function NoteBookModelX(ramCapacity, processorDetail, brand){
    NoteBook.apply(this, arguments);
    this.brand = brand;
}

let newNoteBookModelX = new NoteBookModelX('16GB','3.5 GHz, 4 Core', 'ASUS');
console.log(newNoteBookModelX);
//ফলাফল::
//{
//    brand: "ASUS",
//    ram: 16GB,
//    processor: 3.5 GHz, 4 Core
//}



//.bind() Method এর উদাহরণ
let drone = {
    name: 'DJI Mavic Pro'
}

let getDroneInfo = function (droneRance) {
    return this.name + ' has '+ droneRance + " Range";
}

let droneInfo = getDroneInfo.bind(drone);

console.log(droneInfo);
//ফলাফল হবে betBikerInfo এর Function definition
// f (droneRance) {
//   return this.name + ' has '+ droneRance + " Range";
// }
console.log(droneInfo('10KM'));
//ফলাফল:
// DJI Mavic Pro has 10KM Range
