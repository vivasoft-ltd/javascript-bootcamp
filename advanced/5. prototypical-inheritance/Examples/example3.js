/*
We can use prototype chain to solve this kind of problems
*/

let user = {
    name: "name",
    email: "email",
    id: 00000,
    showAccess: true
}

let singleUser = {
    __proto__ : user,
    ads: true
}

let premiumUser = {
    __proto__ : singleUser,
    ads: false,
    mutiScreen : true
}

/*
we created a new object user_me where
we used three level of prototypical inheritance. 
we can see that user_me object has access to data throughout the chain.
*/
let user_me = {
    __proto__ : premiumUser,
    name : "Mehedi",
    email: "meheditcf@gmail.com",
    id: 001
}

console.log(user_me.mutiScreen) // Output: true
console.log(user_me.ads) // Output: false
console.log(user_me.showAccess) // Output: true