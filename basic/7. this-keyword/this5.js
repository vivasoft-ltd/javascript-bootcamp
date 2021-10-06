let p = {
  name: "Mr X",
  age: 30,
  hobbies: (funcion = () => {
    console.log(this);
  }),
};

p.hobbies(); // output : window object
//inside an object, if arrow function in used this point to to the window object
