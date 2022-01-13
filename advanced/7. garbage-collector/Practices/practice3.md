নিচের কোডটিতে কোন garbage collection algorithm কাজ করতে পারে?

````js
let list = [];
function addToList() {
list.push({name: "Jaber"})
}
addToList()

console.log(list[0])
// Output: { name: 'Jaber' }

list = null;
console.log(list) // Output: null
````