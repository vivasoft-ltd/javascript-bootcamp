let p = {
  name: "Mr X",
  age: 30,
  hobbies() {
    console.log(this);
  },
};

p.hobbies(); // output : the object

//inside an object this point to to the object itself
