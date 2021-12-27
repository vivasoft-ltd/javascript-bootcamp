Here we are making a function for adding new properties and values to a specific object. What will be the console log value of 'person'? I want the function to return a new object by not changing the initial value of 'person' object sitting at the global scope. How can you do that?

  ```javascript
  const addNewProp = (key, value, object) => {
    object[key] = value;
  };
  
  const person = {
    name: 'Anik'
  };
  
  addNewProp('age', 25, person);
  console.log(person);
  ```