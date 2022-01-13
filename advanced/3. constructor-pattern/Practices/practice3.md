নিচের কোডটি লক্ষ করুন। দুটি ইউজার বানানর জন্য দুটি constructor function বানানো হয়েছে। এহাকে normalize করুন with dynamic parameters.

````javascript
function CreateUser1() {
    this.username = 'jaber';
    this.fName = 'Jaber';
    this.lName = 'Al Nahian';
    this.email = 'j@gmail.com';
    this.createUser = function () {
        console.log('A User with username ' + this.username + ', first name ' + this.fName + ' and last name ' + this.lName + ' is created!')
    }
}

function CreateUser2() {
    this.username = 'tareq';
    this.fName = 'Shaiful Hasan';
    this.lName = 'Tareq';
    this.email = 't@gmail.com';
    this.createUser = function () {
        console.log('A User with username ' + this.username + ', first name ' + this.fName + ' and last name ' + this.lName + ' is created!')
    }
}

const user1 = new CreateUser1();
console.log(user1.createUser());


const user2 = new CreateUser2();
console.log(user2.createUser());
````