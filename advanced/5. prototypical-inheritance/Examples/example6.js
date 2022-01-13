//Prototypical Inheritence Example

let plant = {
    hasLeaf: 'yes'
}

let cactus = {
    name: "Cactus",
    __proto__ : plant
}

console.log(cactus.hasLeaf);
//Output true