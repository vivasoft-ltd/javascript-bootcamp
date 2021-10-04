let p = {
  name: "Mr X",
  age: 30,
  hobbies() {
    console.log(`${this.name} is ${this.age} years old.`);
  },
};

p.hobbies(); // output : Mr X is 30 years old.
