//JS Eventloop এর উদাহরণ দেখান হয়েছে, নাম্বার counting এর মাধ্যমে।
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

//এখানে output হবে এমন:
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

//এটা ভার ভারিয়াবল এবং event-loop এর কারণে হয়েছে। এখানে লেট ভারিয়াবল ব্যাবহার করলে থিক ফল আসবে।

