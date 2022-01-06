
What will be the output if we dont use 'new' keyword
while creating new object of constructor function?

```javascript
function Team (name, country){
    this.name = name;
    this.country = country;
}

Team.prototype.detail = function (){
    return this.name + " is from " + this.country;
}

let team1 = Team("Manchester City", "England");
console.log(team1.detail())
```