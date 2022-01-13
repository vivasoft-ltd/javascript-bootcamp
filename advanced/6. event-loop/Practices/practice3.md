নিচের কোডটির output কি হবে?

````js
function main(number) {
console.log('Lets count from 0 to ' + number);
for (var i = 0; i <= number; i++) {
setTimeout(function () {
console.log(i + '\n');
}, 1000);
}
console.log('Done!');
}

main(3);
````
