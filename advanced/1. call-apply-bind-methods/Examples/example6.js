//Examples for Call(), Apply() and Bind() Methods
//Live Example: https://jsfiddle.net/rijans/806Lbwue/14/

//.call() Method Example:

//1st Example of .call() method
let car = {
    name: 'Mitsubishi Lancer X'
}

let getCarInfo = function (ccValue) {
    return this.name + " is " + ccValue + " CC.";
}

console.log(getCarInfo.call(car, 150));
//Output: Suzuki Gixxer SF is 150 CC.

//2nd Example of .call method
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
//Output:
// {
//     brand: "Mitsubishi",
//     engineCC: 150,
//     engines: 1,
//     wheels: 2
// }



//.apply() Method Example:
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
//Output::
//{
//    brand: "ASUS",
//    ram: 16GB,
//    processor: 3.5 GHz, 4 Core
//}



//.bind() Method Example
let drone = {
    name: 'DJI Mavic Pro'
}

let getDroneInfo = function (droneRance) {
    return this.name + ' has '+ droneRance + " Range";
}

let droneInfo = getDroneInfo.bind(drone);

console.log(droneInfo);
//Output will be Function definition of betBikerInfo
// f (droneRance) {
//   return this.name + ' has '+ droneRance + " Range";
// }
console.log(droneInfo('10KM'));
//Output
// DJI Mavic Pro has 10KM Range
