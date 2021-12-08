
const person = {
    firstName: "Anik",
    lastName: "Sajli",
    getFullName: function() {
        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

function printName(favoriteFood) {
    console.log(this.getFullName() + ` loves to eat ${favoriteFood}`);
}

 //   This bind method returns a new function which has it's "this" keyword set to the
 //   provided value in the bind method.
 //   bind() method example:
   
const logName =  printName.bind(person, "Pine apple");   // Anik Sajli loves to eat Pine apple
logName();

// * call method executes the function immediately 
// * doesn't make any copy of the function 
// * call method takes additional parameters as well
// call() method example:

printName.call(person, "Apple");           // Anik Sajli loves to eat Apple

// the difference between call() and apply() method is call() method accepts 
// comma seperated arguments whereas apply method expects the parameters in an array
// apply() method example:

printName.apply(person, ["Orange"]);       // Anik Sajli loves to eat Orange







