```js
function Person(firstName, lastName, age, gender, interests) {
  this.name = { firstName, lastName };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

function Teacher(firstName, lastName, age, gender, interests, subject) {
  Person.call(this, firstName, lastName, age, gender, interests);

  this.subject = subject;
}
```
