/*
We know that we can access the defined method on
the instances of the object. Like this one below:
*/

function Team(name) {
    this.name = name;
}

Team.prototype.getDetails = function() {
    return `${this.name} plays football`;
}

// In this 'team1' and 'team2' instance of Team,
// we can access getDetails() method

let team1 = new Team('Real Madrid');
console.log(team1.getDetails());
// Output: Real Madrid plays football
let team2 = new Team('Barcelona');
console.log(team2.getDetails());
// Output: Barcelona plays football


/*
But if we define methods in an individual object (instances of Team)
then we can only access those methods from the individual object
*/

team1.league = function(){
    return "La Liga"
}

console.log(team1.league())
// Output: La Liga

console.log(team2.league())
// Output: TypeError: team2.league is not a function

