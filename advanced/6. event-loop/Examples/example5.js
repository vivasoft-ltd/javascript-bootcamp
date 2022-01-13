//JS Eventloop Example by couting number
//live: https://jsfiddle.net/rijans/pkb3tsLg/


function main(number) {
    console.log('Lets count from 0 to ' + number);
    for (var i = 0; i <= number; i++) {
        setTimeout(function () {
            console.log(i + '\n');
        }, 1000);
    }
    console.log('Done!');
}

main(5);

//Here the output is:
// "Lets count from 0 to 5"
// "Done!"
// "6
// "
// "6
// "
// "6
// "
// "6
// "
// "6
// "
// "6
// "

//This happened due to var variable and even-loop. It can be quick fixed by using let variable with i.

