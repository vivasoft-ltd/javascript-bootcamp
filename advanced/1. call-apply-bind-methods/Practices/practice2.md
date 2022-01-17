নিচের কোডটি লক্ষ্য করুন। ইহা কি রান হবে? যদি হয়, ইহাতে আলাদা আলাদা করে call(), apply() এন্ড bind() ইমপ্লিমেন্ট করে দেখাও:

````js
function User(uId, uName, uPhone, uEmail) {
    this.user_id = uId;
    this.user_name = uName;
    this.user_phone = uPhone;
    this.user_email = uEmail;
}

function Admin(uId, uName, uPhone, uEmail, appUsername) {
    this.user_id = uId;
    this.user_name = uName;
    this.user_phone = uPhone;
    this.user_email = uEmail;
    this.roles = {
        create: true, update: true, delete: true
    };
    this.app_username = appUsername
}

let getAdminInfo = function (uId, uName, uPhone, uEmail, appUsername) {
    return "We have a new Admin user with id " + uId + " and name " + uName;
}

console.log(getAdminInfo(12, 'jaber', '017','j@gmail.com','jbr'));
````
