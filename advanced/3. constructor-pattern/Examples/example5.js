//Example for Javascript Constructor Pattern Function
//Constructor Pattern মেথড ব্যাবহার করার উদাহরণ

//Live: https://jsfiddle.net/rijans/4drfo3qw/

function BuildCustomPC(cpu, ram, motherBoard, others) {

    this.cpu = cpu;
    this.ram = ram;
    this.motherBoard = motherBoard;
    this.others = others;
    this.buildPC = function () {
        console.log('A PC with RAM ' + ram + ', CPU ' + cpu + ' and motherboard ' + motherBoard + ' is built!')
    }

}

const pc1 = new BuildCustomPC('Core i7 11700', 'Corsair 16GB 3200GHz', 'Asus Gaming G8', {});
console.log(pc1.buildPC());


const pc2 = new BuildCustomPC('Apple M1 Pro', 'TSC 16GB Module', 'Foxcon M1 Mainboard', {});
console.log(pc2.buildPC());

//ফলাফল:
//"A PC with RAM Corsair 16GB 3200GHz, CPU Core i7 11700 and motherboard Asus Gaming G8 is built!"
//"A PC with RAM TSC 16GB Module, CPU Apple M1 Pro and motherboard Foxcon M1 Mainboard is built!"