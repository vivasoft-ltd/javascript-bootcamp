//Example for Javascript Factory Pattern Function
//Live: https://jsfiddle.net/rijans/vr31aj7x/

function buildCustomPC(cpu, ram, motherBoard, others) {
    return {
        cpu: cpu,
        ram: ram,
        motherBoard: motherBoard,
        others: others,
        buildPC: function () {
            console.log('A PC with RAM ' + ram + ', CPU ' + cpu + ' and motherboard ' + motherBoard + ' is built!')
        }
    }
}

const pc1 = buildCustomPC('Core i7 11700', 'Corsair 16GB 3200GHz', 'Asus Gaming G8', {});
console.log(pc1.buildPC());


const pc2 = buildCustomPC('Apple M1 Pro', 'TSC 16GB Module', 'Foxcon M1 Mainboard', {});
console.log(pc2.buildPC());

//Output:
//"A PC with RAM Corsair 16GB 3200GHz, CPU Core i7 11700 and motherboard Asus Gaming G8 is built!"
//"A PC with RAM TSC 16GB Module, CPU Apple M1 Pro and motherboard Foxcon M1 Mainboard is built!"