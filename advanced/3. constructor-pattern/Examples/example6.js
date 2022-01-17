//Constructor Pattern মেথড ব্যাবহার করার উদাহরণ
//Live: https://jsfiddle.net/rijans/opu1xckt/

function CreateUser(username, fName, lName, email) {
    this.username = username;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.createUser = function () {
        console.log('A User with username ' + this.username + ', first name ' + this.fName + ' and last name ' + this.lName + ' is created!')
    }
}

const user1 = new CreateUser('jaber', 'Jaber', 'Al Nahian', 'j@gmail.com');
console.log(user1.createUser());


const user2 = new CreateUser('tareq', 'Shafiul Hasan', 'Tareq', 't@gmail.com');
console.log(user2.createUser());

//ফলাফল:
//"A User with username jaber, first name Jaber and last name Al Nahian is created!"
//"A User with username tareq, first name Shafiul Hasan and last name Tareq is created!"