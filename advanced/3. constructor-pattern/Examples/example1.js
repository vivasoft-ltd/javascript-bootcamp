{
  /*
  Counstructor pattern can be used to create new objects. As you may know that factory pattern 
  can also be used for the same purpose. But the basic difference between these two process 
  is in case of factory pattern the function returns an object but when we're using 
  constructor pattern, we'll be using the 'new' keyword to create an empty object and 
  then add our desired properties to that object with the help of 'this' keyword.
   
  In our code below, the 'this' keyword used in the CreateLaptop() function points to the
  empty object which is being created by the 'new' keyword below.
  */
}

function CreateLaptop(brand, model, ram, storage) {
    this.brand = brand;
    this.model = model;
    this.ram = ram;
    this.storage = storage;
    this.toString = function(){
        return `This ${this.brand} ${this.model} laptop has ${this.ram} RAM and ${this.storage} storage.`
      }
}

const laptop1 = new CreateLaptop("Dell", "Inspiron 15", "8 GB", "1 TB");
console.log(laptop1.toString());

 {
   /*
    Output:
    This Dell Inspiron 15 laptop has 8 GB RAM and 1 TB storage.
   */
 }
