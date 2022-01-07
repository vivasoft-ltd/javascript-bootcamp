/*
Its easy to define private methods or property in a factory.
We just need to include them outside of the returned object.
*/

function person (name) {
    function sayDetail(){
        return name + " who loves travelling";
    }
    return {
        talk: function(){
            console.log('Hello, my name is '+sayDetail())
        }
    }
}

/*
Here in this code sayDetail() is closed inside factory. 
This helps us to keep our implementation details encapsulated.
*/

let person1 = person("Mehedi"); 
person1.talk() // Output: Hello, my name is Mehedi who loves travelling
person1.sayDetail() // Output: TypeError: person1.sayDetail is not a function

