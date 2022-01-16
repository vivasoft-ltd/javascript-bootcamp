/*

আমরা সাধারণত একটি ফাংশনের আর্গুমেন্ট হিসেবে ভেরিয়েবল, অ্যারে, অবজেক্ট ইত্যাদি পাঠিয়ে থাকি। যদি কোন ফাংশনকে আমরা অন্য ফাংশনের আর্গুমেন্ট হিসেবে পাঠায় তাহলে যে ফাংশনকে আর্গুমেন্ট হিসেবে পাঠাচ্ছি সেটাই Callback Function আর যে ফাংশন Callback Function কে আর্গুমেন্ট হিসেবে গ্রহন করছে সেটাই Higher Order Function. এছাড়াও যে ফাংশন তার রিটার্ন ভ্যালু হিসেবে কোন ফাংশনকে পাস করে তাকেও Higher Order Function বলে। একটু উদাহরণ দেখিঃ   

*/

// Callback Function 
function sayHi(name) {
    console.log('Hi, ' + name + '!');
}

// Higher Order Function 
function greetings(process, name) {
    process(name);
    console.log('Welcome to Callback and Higher Order function tutorial.');
}

let student = 'Ahnaf';
greetings(sayHi, student);

/**
 * Output:
 *      Hi, Ahnaf!
 *      Welcome to Callback and Higher Order function tutorial.
 */

// Another Higher Order Function 
function company() {
    let companyName = 'Vivasoft Ltd.';
    let companyType = 'Software Company';
    let companyEmail = 'contact@vivasoftltd.com';

    function viewDetails() {
        console.log('Company Name:', companyName);
        console.log('Type:', companyType);
        console.log('Email:', companyEmail);
    }

    return viewDetails;
}

let myCompanyDetails = company();
myCompanyDetails();

/**
 * Output:
 *      Company Name: Vivasoft Ltd.
 *      Type: Software Company
 *      Email: contact@vivasoftltd.com
 */