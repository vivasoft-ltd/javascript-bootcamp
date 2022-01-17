
let list = [];
function addToList() {
    list.push({name: "Jaber"})
}
addToList()

console.log(list[0])
// Output: { name: 'Jaber' }

list = null;
console.log(list) // Output: null

//এখন রেফেরেঞ্চ function একটি garbage

