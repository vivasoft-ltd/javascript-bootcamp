//Prototypical Inheritance এর একটি উদ্বাহরও দেখান হল।

let plant = {
    hasLeaf: 'yes'
}

let cactus = {
    name: "Cactus",
    __proto__ : plant
}

console.log(cactus.hasLeaf);
//ফলাফল: true