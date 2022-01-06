/*
No matter where the method is found: in an object or its prototype.
In a method call, this is always the object before the dot.
*/

let animal = {
    sleep(){
        this.isSleeping = true;
    }
}

let cat = {
    name: "Billu",
    __proto__ : animal
}

cat.sleep()
console.log(cat.isSleeping) // Output: true
/*
As we called the method as cat.sleep(),
'this' references to cat object. Thats why in the
code below we get undefined. 
*/
console.log(animal.isSleeping) // Output: undefined