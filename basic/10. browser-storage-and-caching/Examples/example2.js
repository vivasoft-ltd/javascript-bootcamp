/*
Only strings can be stored with localStorage or sessionStorage, 
but we can use JSON.stringify to store more complex objects.
*/

// Create item
let person = {name: "mehedi", designation: "Front End Developer"}
localStorage.setItem("person1", JSON.stringify(person))

// Read item
let item = JSON.parse(localStorage.getItem("person1"))