{
    /*
    In the example below, the function getFullName() will be available 
    in every new Name object automatically because we have put this 
    function inside the prototype object of the Name() constructor function. 
    */
}

function Name(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Name.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

var name1 = new Name('Anik', 'Sajli');
console.log(name1.getFullName());                   // Anik Sajli

var name2 = new Name('Fahim', 'Ahmed');
console.log(name2.getFullName());                   // Fahim Ahmed


