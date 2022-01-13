//Prototypical Inheritence Example

let smartPhone = {
    hasCamera: true
}

let nokiaPhone = {
    name: "Nokia 1100",
    __proto__ : smartPhone
}

console.log(nokiaPhone.hasCamera);
//Output: true