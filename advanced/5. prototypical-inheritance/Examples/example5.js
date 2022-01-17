//Prototypical Inheritance এর একটি উদ্বাহরও দেখান হল।

let smartPhone = {
    hasCamera: true
}

let nokiaPhone = {
    name: "Nokia 1100",
    __proto__ : smartPhone
}

console.log(nokiaPhone.hasCamera);
//ফলাফল: true